import React, { useEffect, useState } from "react";
import styles from "./AdminApproval.module.css";
import OutlineCardAdmin from "../components/OutlineCardAdmin";
import OutlineCardAdminApproved from "../components/OutlineCardAdminApproved";
import AccountButton from "../components/AccountButton";

import axios from "axios";

const AdminApproval = () => {
  const [outlineList, setOutlineList] = useState({
    outlines: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/secure/all-outlines-approval", {
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

  const displayList = outlineList.outlines
    .filter((out) => out.approved === false)
    .filter((out) => out.requestApproval === true)

    .map((out) => <OutlineCardAdmin outline={out} key={out._id} />);

  const displayApprovedList = outlineList.outlines
    .filter((out) => out.approved === true)
    .map((out) => <OutlineCardAdminApproved outline={out} key={out._id} />);

  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>Course Outlines</h1>
        </div>

        <div className={styles.MainDiv}>
          <div className={styles.UnapprovedContainer}>
            <div className={styles.Outlines} id="Outlines">
              {displayList}
            </div>
          </div>
          <div className={styles.ApprovedContainer}>
            <div className={styles.Outlines} id="Outlines">
              {displayApprovedList}
            </div>
          </div>
        </div>
        <div className={styles.header}>
          <AccountButton text={"HomePage"} linkTo={"/HomePage"} />
        </div>
      </div>
    </>
  );
};

export default AdminApproval;
