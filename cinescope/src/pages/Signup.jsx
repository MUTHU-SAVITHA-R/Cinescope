import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

function Signup({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = users.some(user => user.email === email);

    if (emailExists) {
      alert("Email already exists! Please login.");
      navigate("/login");
      return;
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    setIsLoggedIn(true);
    navigate("/");
  }

  return (
    <div className="signup-container">
      <form className="signup-card" onSubmit={handleSignup}>
        <h2>Create Account 🎥</h2>
        <p className="subtitle">Join CineScope today</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
