import React from "react";

export const SignUp = () => {
  return (
    <div id="signUp">
      <main>
        <h1 className="title">Signup</h1>
        <div className="signUp-card">
          <label>Username: </label>
          <input
            className="input"
            id="username"
            placeholder="Enter Username/E-Mail"
            name="Username"
            required
          ></input>

          <label>Password: </label>
          <input
            className="input"
            id="password"
            placeholder="Enter Password"
            name="Password"
            required
          ></input>

          <button className="btn" id="submitBtn" type="submit">
            Sign Up
          </button>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
