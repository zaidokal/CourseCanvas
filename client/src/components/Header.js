import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import WesternLogoMini from "../Images/WesternLogoMini.png";

const Header = () => {
  return (
    <div className={styles.Head}>
      <img
        className={styles.WesternLogoMini}
        src={WesternLogoMini}
        alt="Western Mini Logo"
      />

      <div className={styles.OutlineManager}>Outline Manager</div>

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
          <Link to="/">
            <button className={styles.logoutBtn}>Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
