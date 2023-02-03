import React from "react";

export const SignUp = () => {
    return (
      <div id="signUp">
        <main>
                <label>Username: </label>
                <input id="username" placeholder="Enter Username/E-Mail" name="Username" required></input>

                <label>Password: </label>
                <input id="password" placeholder="Enter Password" name="Password" required></input>

                <button id="submitBtn" type="submit"> Sign Up </button>
        </main>
      </div>
    )
  };

  export default SignUp;