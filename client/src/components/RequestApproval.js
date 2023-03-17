import React from "react";
import styles from "./RequestApproval.module.css";
import axios from "axios";

const RequestApproval = (props) => {
  let outline = props.outline;

  const requestCOApproval = () => {
    axios
      .post(
        `http://localhost:8000/api/secure/request/${outline._id}`,
        {
          requestApprove: true,
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

    // window.location.reload();
  };

  return (
    <>
      <div className={styles.container}>
        <button className={styles.ApproveBtn} onClick={requestCOApproval}>
          Request
        </button>
      </div>
    </>
  );
};

export default RequestApproval;
