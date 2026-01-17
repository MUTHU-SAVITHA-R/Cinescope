import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(
      user => user.email === email && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Welcome Back 🎬</h2>
        <p className="subtitle">Login to explore movies</p>

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

        <button type="submit">Login</button>

        <p className="signup-text">
          New user? <Link to="/signup">Create an account</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
