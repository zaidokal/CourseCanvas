import React from "react";
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

      <Link to="/AssignInstructor">
        <button className={styles.LinkButtons}>AssignInstructor</button>
      </Link>
      <Link to="/AdminApproval">
        <button className={styles.LinkButtons}>AdminApproval</button>
      </Link>
      <div className={styles.RightDiv}>
        <div className={styles.UsernameDiv}>
          <p>FirstName LastName</p>
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
