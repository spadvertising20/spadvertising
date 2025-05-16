import express from "express";
import cors from "cors";
import formidable from "formidable";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sanitize from "sanitize-filename";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

// Validate required environment variables
const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`Missing environment variable: ${envVar}`);
    process.exit(1);
  }
}

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Create uploads folder if it doesn't exist
const uploadPath = path.join(__dirname, "Uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
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

    // Validate fields
    const { position, firstName, lastName, experience, phone, email } = fields;
    const requiredFields = { position, firstName, lastName, experience, phone, email };
    for (const [key, value] of Object.entries(requiredFields)) {
      if (!value || typeof value !== "string") {
        return res.status(400).json({ success: false, error: `Missing or invalid ${key}.` });
      }
    }

    const uploadedFile = files.cv;
    if (!uploadedFile) {
      return res.status(400).json({ success: false, error: "CV file is missing." });
    }

    // Sanitize and validate file
    const mime = uploadedFile.mimetype || "application/pdf";
    const ext = mime.split("/")[1] || "pdf";
    const originalName = uploadedFile.originalFilename || `cv-${Date.now()}`;
    const safeFilename = sanitize(originalName.endsWith(`.${ext}`) ? originalName : `${originalName}.${ext}`);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465", // Use SSL/TLS for port 465
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
    } finally {
      // Clean up uploaded file
      try {
        fs.unlinkSync(uploadedFile.filepath);
      } catch (cleanupErr) {
        console.error("File cleanup error:", cleanupErr);
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server started at http://localhost:${PORT}/api/contact`);
});