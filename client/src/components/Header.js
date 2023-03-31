import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
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

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [user_type, setUser_type] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/secure/user-info", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        setFirstName(response.data[0].first_name);
        setLastName(response.data[0].last_name);
        setUser_type(response.data[0].user_type);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleRedirect = () => {
    if (user_type === "admin") {
      window.location.href = "/HomePageAdmin";
    } else if (user_type === "programDirector") {
      window.location.href = "/HomePageDirector";
    } else {
      window.location.href = "/HomePage";
    }
  };

  return (
    <div className={styles.Head}>
      <img
        className={styles.WesternLogoMini}
        src={WesternLogoMini}
        alt="Western Mini Logo"
      />

      <div className={styles.OutlineManagerDiv}>
        <button onClick={handleRedirect} className={styles.OutlineManager}>
          Outline Manager
        </button>
      </div>

      <div className={styles.RightDiv}>
        <div className={styles.UsernameDiv}>
          <p>
            {firstName} {lastName} ({user_type})
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
