import { useState } from "react";
import "./Career.css";
import join_us from "../../assets/Career/join-us.png"

export default function CareerForm() {
  const [formData, setFormData] = useState({
    position: "",
    firstName: "",
    lastName: "",
    experience: "",
    phone: "",
    email: "",
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
      const res = await fetch(
        "https://spadvertising.onrender.com/api/contact",
        {
          method: "POST",
          body: form,
        }
      );

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
      <section className="career-section">
        <div className="career-section-con">
          <div className="job-recruitment">Job Recruitment</div>
          <h1>Boost Your Career</h1>
          <p>
            At SP Advertising Company, we’re not just building products — we’re
            building a future where innovation, creativity, and passion come
            together. If you’re driven by purpose and excited to grow in a
            fast-paced, supportive environment, we’d love to meet you.
          </p>
          {/* <button>Apply Now</button> */}
          <img src={join_us} alt="" />
        </div>
      </section>
      <form onSubmit={handleSubmit} className="career-form">
        <h2>Apply for a Position</h2>

        <label>
          Position Title <span className="required">*</span>
          
          <input
            name="position"
            required
            value={formData.firstName}
            onChange={handleChange}
            type="text"
          />
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
          <input name="cv" type="file" required onChange={handleChange} />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
}
