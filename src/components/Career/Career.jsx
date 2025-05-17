import { useState } from "react";
import "./Career.css";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    position: "sales",
    firstName: "raju",
    lastName: "rao",
    experience: "2",
    phone: "1234567890",
    email: "raju@gmail.com",
    cv: null,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        body: form,
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("✅ Application submitted successfully.");
        setFormData({
          position: "",
          firstName: "",
          lastName: "",
          experience: "",
          phone: "",
          email: "",
          cv: null,
        });
      } else {
        setStatus("❌ Failed to submit. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Server error. Try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="career-container">
      <form onSubmit={handleSubmit} className="career-form">
        <h2>Apply for a Position</h2>

        <label>
          Position Title <span className="required">*</span>
          <select
            name="position"
            required
            value={formData.position}
            onChange={handleChange}
          >
            <option value="Sales Executive">-- Select --</option>
            <option value="Sales Executive">Sales Executive</option>
            <option value="Sales Intern">Sales Intern</option>
            <option value="Graphics Designer">Graphics Designer</option>
            <option value="Business Development">Business Development</option>
          </select>
        </label>

        <label>
          First Name <span className="required">*</span>
          <input
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            type="text"
          />
        </label>

        <label>
          Last Name <span className="required">*</span>
          <input
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            type="text"
          />
        </label>

        <label>
          Year of Experience <span className="required">*</span>
          <input
            name="experience"
            required
            value={formData.experience}
            onChange={handleChange}
            type="number"
            min="0"
          />
        </label>

        <label>
          Phone Number <span className="required">*</span>
          <input
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            type="tel"
          />
        </label>

        <label>
          Email <span className="required">*</span>
          <input
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
        </label>

        <label>
          Upload Your CV <span className="required">*</span>
          <input
            name="cv"
            type="file"
            required
            onChange={handleChange}
            
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
}
