import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import multer from "multer";
import dotenv from "dotenv";

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());
dotenv.config();

// Configure Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER, // Replace with your email
    pass: process.env.SMTP_PASS, // Replace with your app-specific password
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Transporter verification failed:', error);
  } else {
    console.log('Transporter is ready to send emails');
  }
});

// Endpoint to handle form submission
app.post('/api/contact', upload.single('cv'), async (req, res) => {
  try {
    const { position, firstName, lastName, experience, phone, email } = req.body;
    const cvFile = req.file;

    // Prepare email content for the job application (to employer)
    const applicationMailOptions = {
      from: process.env.SMTP_USER, // Sender email
      to: process.env.SMTP_TO_HR, // Recipient email (employer)
      subject: `New Job Application: ${position} - ${firstName} ${lastName}`,
      html: `
        <h3>New Job Application</h3>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Years of Experience:</strong> ${experience}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
      attachments: cvFile
        ? [
            {
              filename: cvFile.originalname,
              content: cvFile.buffer,
            },
          ]
        : [],
    };

    // Prepare email content for the confirmation (to applicant)
    const confirmationMailOptions = {
      from: process.env.SMTP_USER, // Sender email
      to: process.env.SMTP_TO_SIR, // Recipient email (employer) 
      subject: `Application Confirmation for ${position}`,
      html: `
        <h3>Application Received</h3>
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for applying for the <strong>${position}</strong> position.</p>
        <p>We have received your application and will review it shortly. Below are the details you submitted:</p>
        <p><strong>Years of Experience:</strong> ${experience}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>Best regards,</p>
        <p>Recruitment Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(applicationMailOptions);
    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({ message: 'Application submitted successfully, and confirmation email sent' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});