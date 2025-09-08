import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"; // import the CSS file

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/forgot-password", {
        email,
      });
      setMessage(res.data.message);
      setTimeout(() => navigate("/reset-password", { state: { email } }), 1500);
    } catch (err) {
      setMessage(err.response?.data?.error || "Error occurred");
    }
  };

  return (
    <div className="forgot-container">
      <form onSubmit={handleSubmit} className="forgot-form">
        <h2 className="forgot-title">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="forgot-input"
          required
        />
        <button className="forgot-button">Send OTP</button>
        {message && <p className="forgot-message">{message}</p>}
      </form>
    </div>
  );
}
