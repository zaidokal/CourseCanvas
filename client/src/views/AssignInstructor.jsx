import React, { useState, useEffect } from "react";
import styles from "./AssignInstructor.module.css";
import AccountButton from "../components/AccountButton";
import ChangeButton from "../components/ChangeButton";
import axios from "axios";
import OutlineCardAdmin from "../components/OutlineCardAdmin";

export const AssignInstructor = (props) => {
  const [courseNames, setCourseNames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/secure/course-names", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data); // log the data returned by the server
        setCourseNames(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const displayList = courseNames.map((cou) => (
    <button key={cou._id}>{cou.title}</button>
  ));

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
              <h1 className={styles.courseNames}>Courses</h1>
              {displayList}
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

export default AssignInstructor;
