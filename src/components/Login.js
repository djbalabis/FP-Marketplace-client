import React from "react";

export const Login = () => {
  return (
    <div id="login">
      <main>
        <h1 className="title">Login</h1>
        <div className="login-card">
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
            Login
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
