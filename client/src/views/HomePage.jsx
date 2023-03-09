import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import OutlineCard from "../components/OutlineCard";
import axios from "axios";

const HomePage = () => {
  const [outlineList, setOutlineList] = useState({
    outlines: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/secure/all-outlines", {
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
      <div className={styles.container}>
        <div className={styles.AdminDiv}>
          <Link to="/AssignInstructor">
            <button className={styles.LinkButtons}>AssignInstructor</button>
          </Link>
          <Link to="/AdminApproval">
            <button className={styles.LinkButtons}>AdminApproval</button>
          </Link>
        </div>
        <div className={styles.title}>Course Outlines</div>
        <div>
          <Link to="/COTemplate">
            <button className={styles.COTemp}>Create Course Outline</button>
          </Link>
        </div>

        <div className={styles.Outlines} id="Outlines">
          {displayList}
        </div>
      </div>
    </>
  );
};

export default HomePage;
