import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css"; // import the CSS file

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://spadvertising-l9xm.onrender.com/api/auth/login",
        form
      );
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful!");
      setTimeout(() => navigate("/blogs"), 1000); // redirect after login
    } catch (err) {
      setMessage(err.response?.data?.error || "Error occurred");
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2 className="signin-title">Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="signin-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="signin-input"
          required
        />
        <button className="signin-button">Sign In</button>
        {/* <p className="signin-text">
          Don't have an account?{" "}
          <Link to="/signup" className="link-green">
            Sign Up
          </Link>
        </p> */}
        <p className="signin-text">
          <Link to="/forgot-password" className="link-purple">
            Forgot Password?
          </Link>
        </p>
        {message && <p className="signin-message">{message}</p>}
      </form>
    </div>
  );
}
