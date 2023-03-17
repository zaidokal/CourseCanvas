import React, { useRef, useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import WesternLogoMini from "../Images/WesternLogoMini.png";

import axios from "axios";

const Header = () => {
  const handleLogout = () => {
    axios
      .get("http://localhost:8000/api/auth/logout", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/secure/user-info", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        setUser(response.data);
        setFirstName(response.data[0].first_name);
        setLastName(response.data[0].last_name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.Head}>
      <img
        className={styles.WesternLogoMini}
        src={WesternLogoMini}
        alt="Western Mini Logo"
      />

      <div className={styles.OutlineManagerDiv}>
        <Link to="/HomePage">
          <button className={styles.OutlineManager}>Outline Manager</button>
        </Link>
      </div>

      <div className={styles.RightDiv}>
        <div className={styles.UsernameDiv}>
          <p>
            {firstName} {lastName}
          </p>
        </div>

        <div className={styles.logoutDiv}>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
