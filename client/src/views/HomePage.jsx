import React from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import NewButton from "../HomePage";
import AccountButton from "../components/AccountButton";

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Course Outlines</h1>
      </div>

      <div className={styles.Outlines} id="Outlines">
        <button className={styles.square} id="createButton" onClick={NewButton}>
          +
        </button>
      </div>

      <div className={styles.AccountDiv1}>
        <Link>
          <div>
            <AccountButton
              className={styles.Button}
              linkTo={"/COTemplate"}
              text={"COTemplate"}
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
