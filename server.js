// server.js
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
    if (err) return res.status(400).json({ success: false, error: "Form parsing failed." });

    const { position, firstName, lastName, experience, phone, email } = fields;
    const uploadedFile = files.cv;

    if (!uploadedFile) {
      return res.status(400).json({ success: false, error: "CV file is missing." });
    }

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
Position: ${position}
Name: ${firstName} ${lastName}
Experience: ${experience}
Phone: ${phone}
Email: ${email}
      `,
      attachments: [
        {
          filename: uploadedFile.originalFilename,
          path: uploadedFile.filepath,
        },
      ],
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Application sent successfully." });
    } catch (mailErr) {
      console.error("Mail error:", mailErr);
      res.status(500).json({ success: false, error: "Failed to send email." });
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
