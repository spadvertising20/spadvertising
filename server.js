import express from "express";
import cors from "cors";
import { formidable } from "formidable";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Ensure uploads directory exists
const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

app.post("/api/contact", (req, res) => {
  const form = formidable({
    multiples: false,
    uploadDir: uploadPath,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(400).json({ success: false, error: "Form parsing failed." });
    }

    const { position, firstName, lastName, experience, phone, email } = fields;
    const uploadedFile = files.cv;

    if (!uploadedFile) {
      return res.status(400).json({ success: false, error: "CV file is missing." });
    }

    // Check if file exists
    try {
      await fs.promises.access(uploadedFile.filepath, fs.constants.F_OK);
    } catch (fileErr) {
      console.error("Uploaded file not found:", fileErr);
      return res.status(400).json({ success: false, error: "Uploaded file not found." });
    }

    // Determine filename and extension
    const mime = uploadedFile.mimetype || "application/pdf";
    const ext = mime.split("/")[1] || "pdf";
    const originalName = uploadedFile.originalFilename || "cv";
    const safeFilename = originalName.endsWith(`.${ext}`)
      ? originalName
      : `${originalName}.${ext}`;

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"SP Advertising Careers" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
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
          filename: safeFilename,
          path: uploadedFile.filepath,
          contentType: mime,
        },
      ],
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
  console.log(`✅ Server running at http://localhost:${PORT}/api/contact`);
});
