import React, { useState } from "react";
// import HeaderAccount from "../components/HeaderAccount";
import styles from "./Login.module.css";
import AccountButton from "../components/AccountButton";
import ChangeButton from "../components/ChangeButton";
// import BackgroundOpacity from "../components/BackgroundOpacity";
import axios from "axios";

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
    // console.log(userInput);
    axios
      .post("http://localhost:8000/api/auth/login", userInput, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        window.location.href = "/HomePage";
        // alert(res.data);
      })
      .catch((err) => {
        // const errorMessage =
        //   err.response?.data?.message || "An error occurred.";
        const errorElement = document.getElementById(styles.loginError);
        errorElement.textContent =
          "Please enter the correct username and password";
      });
  };

  return (
    <>
      {/* <HeaderAccount /> */}
      {/* <BackgroundOpacity /> */}

      <div className={styles.MainDiv}>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.EmailBox}
            type="email"
            name="email"
            value={userInput.email}
            placeholder="Email"
            onChange={handleChange}
          />
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
            <AccountButton
              text={"Login"}
              linkTo={"/HomePage"}
              onClick={handleSubmit}
            />
          </div>
        </form>

        {/* <ChangeButton text={"Update Password?"} linkTo={"/ChangePassword"} />

        <ChangeButton
          text={"Don't have an account? Register here."}
          linkTo={"/register"}
        /> */}
      </div>
    </>
  );
};
