import React, { useState } from "react";
import "./login.css"; 
import logo from "./logo.jpg";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src={logo} alt="logo" className="logo" />
        <h2>Clean Street</h2>
      </div>

      <h3>Welcome Back</h3>
      <p>Sign in to continue making your community better</p>

      
      <div className="demo-box">
        <strong>Demo Credentials:</strong>
        <p>
          <b>User:</b> demo@user.com / password123 <br />
          <b>Admin:</b> admin@cleanstreet.com / admin123
        </p>
      </div>

      
      <form onSubmit={handleSubmit} className="login-form">
        <h4>Sign In</h4>
        <p>Enter your credentials to access your account</p>

        <label>Email</label>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="extra-options">
          <a href="/">Forgot password?</a>
        </div>

        <button type="submit">Sign In</button>
      </form>

      <p className="signup-text">
        Don't have an account? <a href="/">Sign up</a>
      </p>
    </div>
  );
}

export default Login;