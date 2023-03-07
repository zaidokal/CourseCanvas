import React, { useState } from "react";
import styles from "./AssignInstructor.module.css";
import AccountButton from "../components/AccountButton";
import ChangeButton from "../components/ChangeButton";

export const AssignInstructor = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className={styles.MainDiv}>
        <form>
          <div className={styles.Courses}>
            <div className={styles.InsideCourses}>
              <h1>Courses</h1>
              <button>Hello</button>
              <button>Hello</button>
              <button>Hello</button>
              <button>Hello</button>
              <button>Hello</button>
              <button>Hello</button>
              <button>Hello</button>
              <button>Hello</button>
            </div>
          </div>
          <div className={styles.Description}>
            <div className={styles.InsideDescription}>
              <h1>Description</h1>
              <div>
                <label htmlFor="dropdown">Select an instructor:</label>
                <select
                  id="dropdown"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="">--Select--</option>
                  <option value="Instructor 1">Instructor 1</option>
                  <option value="Instructor 2">Instructor 2</option>
                  <option value="Instructor 3">Instructor 3</option>
                </select>
                <p>Selected instructor: {selectedOption}</p>
                <button className={styles.Assign}>Assign Instructor</button>
              </div>
            </div>
          </div>
          <div className={styles.header}>
            <AccountButton text={"HomePage"} linkTo={"/HomePage"} />
          </div>
        </form>
      </div>
    </>
  );
};
