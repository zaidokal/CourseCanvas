import React from "react";
import styles from "./OutlineCardAdminApproved.module.css";
import axios from "axios";
import { REACT_APP_IP, REACT_APP_PORT } from "../config";

const OutlineCardAdminApproved = (props) => {
  let outline = props.outline;

  const unapproveCO = () => {
    axios
      .post(
        `http://${REACT_APP_IP}:${REACT_APP_PORT}/api/secure/reply/${outline._id}`,
        {
          decider: "Requested",
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

  const handleOutlineRedirect = () => {
    window.location.href = `/${outline._id}`;
  };

  return (
    <>
      <div className={styles.container}>
        <button
          onClick={handleOutlineRedirect}
          className={styles.square}
          id="createButton"
        >
          <span>{outline.courseName}</span>
          <span>{outline.year}</span>
        </button>

        <div className={styles.Decision}>
          <p className={styles.ApproveBtn} onClick={unapproveCO}>
            Unapprove
          </p>
        </div>
      </div>
    </>
  );
};

export default OutlineCardAdminApproved;
