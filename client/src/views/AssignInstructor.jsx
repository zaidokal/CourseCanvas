import React, { useState, useEffect } from "react";
import styles from "./AssignInstructor.module.css";
import AccountButton from "../components/AccountButton";
import axios from "axios";

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

  const [instructorNames, setInstructorNames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/secure/instructor-names", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data); // log the data returned by the server
        setInstructorNames(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState("");

  const displayList = (
    <select
      value={selectedCourse}
      onChange={(e) => setSelectedCourse(e.target.value)}
    >
      <option>course</option>
      {courseNames.map((cou) => (
        <option key={cou._id} value={cou.title}>
          {cou.title}
        </option>
      ))}
    </select>
  );

  const displayInstructorList = (
    <select
      value={selectedInstructor}
      onChange={(e) => setSelectedInstructor(e.target.value)}
    >
      <option>instructor</option>
      {instructorNames.map((inst) => (
        <option key={inst._id} value={inst.user_id}>
          {inst.first_name + " " + inst.last_name}
        </option>
      ))}
    </select>
  );

  const handleAssign = (e) => {
    e.preventDefault();
    const cou = selectedCourse;
    const inst = selectedInstructor;

    console.log(cou, inst);

    axios
      .post(
        `http://localhost:8000/api/secure/assignment/${inst}`,
        {
          course_title: cou,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        alert("Save successful.");
      })
      .catch((err) => {
        alert("Bad Request, please fill out ALL required fields.");
        console.log(err.response);
      });
  };

  return (
    <>
      <div className={styles.container}>
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
                {displayInstructorList}
                <button className={styles.Assign} onClick={handleAssign}>
                  Assign Instructor
                </button>
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
