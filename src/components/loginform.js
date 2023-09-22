import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";

const Loginform = () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client: auth2', start)
    })

  const [popupStyle, showPopup] = useState("hide");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    loginStatus: "",
  });

  const handleLogin = async () => {
    try {
      // Make an API request to your backend for login
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Update login status if successful
        setFormData({ ...formData, loginStatus: "Login Successful" });
      } else {
        // Update login status if login fails
        setFormData({ ...formData, loginStatus: "Login Failed" });
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const onSuccess = (e) => {
    alert("User signed in");
    console.log(e);
  };

  const onFailure = (e) => {
    alert("User sign in Failed");
    console.log(e);
  };

  const handleForgotPassword = () => {
    const phoneNumber = prompt("Please enter your mobile number:");
    // Here, you can implement logic to send OTP and handle redirection
    // based on OTP verification.
  };

  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      <div className="login-btn" onClick={handleLogin}>
        {formData.loginStatus || "Login"}
      </div>

      <div className="additional-options">
        <span>
        Don't have an account? <Link to="/signup">Sign Up</Link>
        </span><br/>
        <span onClick={handleForgotPassword}>Forgot Password</span>
      </div>
    </div>
  );
};

export default Loginform;


const css = `
* {
  margin: 0;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;
}

@font-face {
  font-family: 'Courier New', Courier, monospace;
  src: url('https://fonts.googleapis.com/css2?family=Courier+New:wght@400;700&display=swap');
}

.page {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cover {
  background-color: #f1fee1;
  width: 30em;
  height: 40em;
  position: relative;
  border-radius: 1em;
  box-shadow: 0 0.188em 1.550em rgb(60, 180, 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.alt-login {
  width: 80%;
  height: 3em;
  display: flex;
  justify-content: space-around;
}

.alt-login div {
  width: 47.5%;
  height: 90%;
  border-radius: 0.25em;
  background-color: black;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
}

.google {background-image: url("./icons/google.png");}
.facebook {background-image: url("./icons/facebook.png");}

input {
  border: none;
  background-color: #f1f1f1;
  width: 80%;
  border-radius: 0.25em;
  text-align: center;
  padding: 2em;
  font-size: 0.75em;
}

input:focus {
  outline-color: #dffdba;
}

.login-btn {
  width: 40%;
  height: 3em;
  background-color: #498604;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  border-radius: 0.25em;
  cursor: pointer;
}

.login-btn:hover { transform: scale(1.25);}

.text {
  position: relative;
  bottom: 0.5%;
}

.hide {
  position: absolute;
  transform: scale(0);
}

.login-popup {
  position: absolute;
  height: 30em;
  width: 30em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.25em;
  background-color: black;
  color: #dffdba;
  bottom: 0;
  transform: scale(1);
  transition: 1.5s;
}

.blue {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('./icons/google.png');
}

@media only screen and (min-device-width: 37em) {
  .page {
      font-size: 1em;
  }

  .cover {
      width: 60%;
      height: 70%;
  }
}

@media only screen and (min-device-width: 64em) {
  .page {
      font-size: 1.25em;
  }

  .cover {
      width: 25%;
      height: 65%;
  }
}
`;
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);