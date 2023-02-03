import React from "react";

export const Login = () => {
  return (
    <div id="login">
      <main>
        <label>Username: </label>
        <input id="username" placeholder="Enter Username/E-Mail" name="Username" required></input>

        <label>Password: </label>
        <input id="password" placeholder="Enter Password" name="Password" required></input>

        <button id="submitBtn" type="submit"> Login </button>
      </main>
    </div>
  )
};
  
export default Login;