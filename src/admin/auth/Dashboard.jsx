import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // import the CSS file

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("https://spadvertising-l9xm.onrender.com/api/auth/dashboard", {
          headers: { Authorization: token }
        });
        setMessage(res.data.message);
      } catch {
        localStorage.removeItem("token");
        navigate("/admin");
      }
    };
    fetchDashboard();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <div className="dashboard-container">
      {/* <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-message">{message}</p> */}
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}
