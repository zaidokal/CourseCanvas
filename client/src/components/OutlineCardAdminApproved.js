import React from "react";
import { Link } from "react-router-dom";
import styles from "./OutlineCardAdmin.module.css";
import axios from "axios";

const OutlineCardAdminApproved = (props) => {
  let outline = props.outline;

  const unapproveCO = () => {
    axios
      .post(
        `http://localhost:8000/api/secure/decision/${outline._id}`,
        {
          approval: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        // Call the onApprove prop function passed from the parent component
        props.onApprove(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(
        `http://localhost:8000/api/secure/reply/${outline._id}`,
        {
          decider: "Not Requested",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        // Call the onApprove prop function passed from the parent component
        props.onApprove(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    window.location.reload();
  };

  return (
    <>
      <div className={styles.container}>
        <Link
          to={`/${outline._id}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <button className={styles.square} id="createButton">
            <span>{outline.courseName}</span>
            <span>{outline.year}</span>
          </button>
        </Link>
        <button className={styles.ApproveBtn} onClick={unapproveCO}>
          Unapprove
        </button>
      </div>
    </>
  );
};

export default OutlineCardAdminApproved;
