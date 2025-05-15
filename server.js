// server.js (or in routes/api.js)
import express from "express";
import formidable from "formidable";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const app = express();

app.post("/api/contact", (req, res) => {
  const form = formidable({ multiples: false, uploadDir: "./uploads", keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(500).json({ message: "Form parse error" });
    }

    const { name, email, phone } = fields;
    const photo = files.photo;

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
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
      attachments: photo
        ? [
            {
              filename: photo.originalFilename,
              path: photo.filepath,
            },
          ]
        : [],
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Email send error:", error);
      return res.status(500).json({ message: "Email sending failed" });
    }
  });
});

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
