import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

function Signup({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const rules = {
    length: password.length >= 8 && password.length <= 20,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[@$!%*?&]/.test(password),
  };

  function handleSignup(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (Object.values(rules).includes(false)) {
      alert("Password does not meet all requirements!");
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

        <div className="password-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />


          {password && Object.values(rules).includes(false) && (
            <div className="password-rules-card">
              <ul>
                <li className={rules.length ? "valid" : "invalid"}>
                  {rules.length ? "✅" : "❌"} 8–20 characters
                </li>
                <li className={rules.uppercase ? "valid" : "invalid"}>
                  {rules.uppercase ? "✅" : "❌"} At least one uppercase letter
                </li>
                <li className={rules.lowercase ? "valid" : "invalid"}>
                  {rules.lowercase ? "✅" : "❌"} At least one lowercase letter
                </li>
                <li className={rules.number ? "valid" : "invalid"}>
                  {rules.number ? "✅" : "❌"} At least one number
                </li>
                <li className={rules.special ? "valid" : "invalid"}>
                  {rules.special ? "✅" : "❌"} At least one special character (@$!%*?&)
                </li>
              </ul>
            </div>
          )}

        </div>

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
