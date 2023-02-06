import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div id="signUp">
      <main>
        {/* <h1 className="title">Signup</h1> */}
        <div className="signUp-card">
          <h2>Create account</h2>
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
            Create your Maketplace account
          </button>
          <p className="already">Have an account? <Link to="/login" className="sign-link">Sign in</Link></p>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
