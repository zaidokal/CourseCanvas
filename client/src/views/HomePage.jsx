import React from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import AccountButton from "../components/AccountButton";

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Hello!</h1>
      </div>

      <div className={styles.AccountDiv1}>
        <Link>
          <div>
            {/* <AccountButton
              className={styles.Button}
              linkTo={"/login"}
              text={"LOGIN"}
            /> */}
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
