import React from "react";
import { Link } from "react-router-dom";
import styles from "./OutlineCard.module.css";
import { REACT_APP_IP, REACT_APP_PORT } from "../config";

const OutlineCard = (props) => {
  let outline = props.outline;

  const handleOutlineRedirect = () => {
    window.location.href = `http://${REACT_APP_IP}:${REACT_APP_PORT}/${outline._id}`;
  };

  return (
    // <Link to={`/${outline._id}`}>
    <button
      className={styles.square}
      id="createButton"
      onClick={handleOutlineRedirect}
    >
      <span>{outline.courseName}</span>
      <span>{outline.year}</span>
    </button>
    // </Link>
  );
};

export default OutlineCard;
