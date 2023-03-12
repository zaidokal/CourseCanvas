import React from "react";
import { Link } from "react-router-dom";
import styles from "./OutlineCard.module.css";

const OutlineCard = (props) => {
  let outline = props.outline;

  return (
    <Link
      to={`/${outline._id}`}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <button className={styles.square} id="createButton">
        <span>{outline.courseName}</span>
        <span>{outline.year}</span>
      </button>
    </Link>
  );
};

export default OutlineCard;
