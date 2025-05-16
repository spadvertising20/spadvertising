import React, { useState } from "react";

const Career = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    position: "",
    experience: "",
    phone: "",
    email: "",
  });

  const [cvFile, setCvFile] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cvFile) return alert("Please upload your CV!");

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("cv", cvFile);

    try {
      const res = await fetch("https://spadvertising.onrender.com/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        alert("Application sent successfully!");
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send application.");
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <br /><br /><br /><br /><br /><br />
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <input type="text" name="position" placeholder="Position Applying For" onChange={handleChange} required />
      <input type="text" name="experience" placeholder="Experience in years" onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="file" name="cv" accept=".pdf" onChange={handleFileChange} required />
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default Career;
