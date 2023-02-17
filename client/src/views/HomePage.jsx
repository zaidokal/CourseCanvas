import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import NewButton from "../HomePage";
import AccountButton from "../components/AccountButton";
import OutlineCard from "../components/OutlineCard";
import axios from "axios";
import { REACT_APP_IP, REACT_APP_PORT } from "../config";

const HomePage = () => {
  const [outlineList, setOutlineList] = useState({
    outlines: [],
  });

  useEffect(() => {
    axios
      .get(`http://${REACT_APP_IP}:${REACT_APP_PORT}/api/secure/all-outlines`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setOutlineList({
          outlines: res.data,
        });
      })
      .catch((err) => {
        console.log("Error in OutlineList");
      });
  }, []);

  const displayList = outlineList.outlines.map((out) => (
    <OutlineCard outline={out} key={out._id} />
  ));

  return (
    <>
      <div>
        <h1>Course Outlines</h1>
      </div>

      <div className={styles.Outlines} id="Outlines">
        {displayList}
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
