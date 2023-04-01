import React from "react";
import { Link } from "react-router-dom";
import styles from "./OutlineCard.module.css";
import { REACT_APP_IP } from "../config";

const OutlineCard = (props) => {
  let outline = props.outline;

  const handleOutlineRedirect = () => {
    window.location.href = `http://${REACT_APP_IP}:3000/${outline._id}`;
  };

  return (
    <button
      className={styles.square}
      id="createButton"
      onClick={handleOutlineRedirect}
    >
      <span>{outline.courseName}</span>
      <span>{outline.year}</span>
    </button>
  );
};

export default OutlineCard;
