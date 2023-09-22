import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form Data:", formData);
    alert("Account created successfully!");
  };

  return (
    <div className="signup-cover">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default SignupForm;

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
