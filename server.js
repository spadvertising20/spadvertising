import express from "express";
import cors from "cors";
import formidable from "formidable";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use("/uploads", express.static("uploads"));

app.post("/api/contact", (req, res) => {
  const form = formidable({ multiples: false, uploadDir: "./uploads", keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(400).json({ success: false, error: "Form parsing failed." });
    }

    const {
      position,
      firstName,
      lastName,
      experience,
      phone,
      email
    } = fields;

    const uploadedFile = files.cv;

    if (!uploadedFile) {
      return res.status(400).json({ success: false, error: "CV file is missing." });
    }

    // Configure email transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "rajurao1106@gmail.com",
        pass: "uvbjgppgppjtxjac"
      }
    });

    // Email message
    const mailOptions = {
      from: `"SP Advertising Careers" <rajurao1106@gmail.com>`,
      to: "rajurao1106@gmail.com",
      subject: `New Application for ${position}`,
      text: `
New career application:

Position: ${position}
Name: ${firstName} ${lastName}
Experience: ${experience} years
Phone: ${phone}
Email: ${email}
      `,
      attachments: [
        {
          filename: uploadedFile.originalFilename,
          path: uploadedFile.filepath
        }
      ]
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Application sent successfully." });
    } catch (mailErr) {
      console.error("Email send error:", mailErr);
      res.status(500).json({ success: false, error: "Failed to send email." });
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}/api/contact`);
});
