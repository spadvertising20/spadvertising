import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResetPassword.css"; // import CSS

export default function ResetPassword() {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://spadvertising-l9xm.onrender.com/reset-password", {
        email,
        otp,
        newPassword,
      });
      setMessage(res.data.message);
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.error || "Error occurred");
    }
  };

  return (
    <div className="reset-container">
      <form onSubmit={handleSubmit} className="reset-form">
        <h2 className="reset-title">Reset Password</h2>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="reset-input"
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="reset-input"
          required
        />
        <button className="reset-button">Reset Password</button>
        {message && <p className="reset-message">{message}</p>}
      </form>
    </div>
  );
}
