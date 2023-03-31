import React from "react";
import styles from "./OutlineCardAdminApproved.module.css";
import axios from "axios";

const OutlineCardAdminApproved = (props) => {
  let outline = props.outline;

  const unapproveCO = () => {
    axios
      .post(
        `http://localhost:8000/api/secure/reply/${outline._id}`,
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
