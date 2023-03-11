import React, { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import WesternLogo from "../Images/WesternLogo.png";

export const Login = (props) => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUserInput((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/login", userInput, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        window.location.href = "/HomePage";
      })
      .catch((err) => {
        const errorElement = document.getElementById(styles.loginError);
        errorElement.textContent =
          "Please enter the correct username and password";
      });
  };

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.ContainerDiv}></div>

        <div className={styles.LoginDiv}>
          <img
            className={styles.WesternLogo}
            src={WesternLogo}
            alt="My Image"
          />
          <p className={styles.COM}>Course Outline Manager</p>

          <form onSubmit={handleSubmit}>
            <input
              className={styles.EmailBox}
              type="email"
              name="email"
              value={userInput.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <br />
            <input
              className={styles.PasswordBox}
              type="password"
              name="password"
              value={userInput.password}
              placeholder="Password"
              onChange={handleChange}
            />

            <div id={styles.loginError}></div>

            <div className={styles.AccountButton}>
              <button className={styles.LoginBtn} onClick={handleSubmit}>
                Login
              </button>
            </div>
            <p>version 1.0</p>
          </form>
          <footer>© Built and Designed by SRZ</footer>
        </div>
      </div>
    </>
  );
};
