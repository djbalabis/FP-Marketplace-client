import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div id="login">
      <main>
        {/* <h1 className="title">Login</h1> */}
        <div className="login-card">
        <h2>Sign in</h2>
          <label>Username</label>
          <input
            className="input"
            id="username"
            placeholder="Enter Username/E-Mail"
            name="Username"
            required
          ></input>

          <label>Password</label>
          <input
            className="input"
            id="password"
            placeholder="Enter Password"
            name="Password"
            required
          ></input>

          <button className="btn" id="submitBtn" type="submit">
            Sign in
          </button>
          <p className="already">New to Marketplace? <Link to="/signup" className="sign-link">Sign up</Link></p>
        </div>
      </main>
    </div>
  );
};

export default Login;
