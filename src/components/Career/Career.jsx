// components/ContactForm.jsx
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    photo: null,
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    if (formData.photo) {
      data.append("photo", formData.photo);
    }

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    setStatus(result.message);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
      <input type="file" name="photo" accept="image/*" onChange={handleChange} />
      <button type="submit">Send</button>
      {status && <p>{status}</p>}
    </form>
  );
}
