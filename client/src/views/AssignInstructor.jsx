import React, { useState, useEffect } from "react";
import styles from "./AssignInstructor.module.css";
import axios from "axios";
import Header from "../components/Header";

export const AssignInstructor = (props) => {
  const [user_type, setUser_type] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/secure/user-info", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        setUser_type(response.data[0].user_type);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (user_type !== null) {
      if (user_type === "admin") {
      } else if (user_type === "programDirector") {
        window.location.href = "/HomePageDirector";
      } else {
        window.location.href = "/HomePage";
      }
    }
  }, [user_type]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (user_type !== null) {
      } else {
        window.location.href = "/Login";
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [user_type]);

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
      className={styles.Display}
      value={selectedCourse}
      onChange={(e) => setSelectedCourse(e.target.value)}
    >
      <option>Select Course</option>
      {courseNames.map((cou) => (
        <option key={cou._id} value={cou.title}>
          {cou.title}
        </option>
      ))}
    </select>
  );

  const displayInstructorList = (
    <select
      className={styles.Display}
      value={selectedInstructor}
      onChange={(e) => setSelectedInstructor(e.target.value)}
    >
      <option>Select Instructor</option>
      {instructorNames
        .filter((inst) => inst.courses.includes(selectedCourse))
        .map((inst) => (
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
      <Header></Header>
      <div className={styles.Container}>
        <div className={styles.PictureDiv}></div>

        <div className={styles.LoginDiv}>
          <p className={styles.COM}>Instructor Assignment</p>
          <form>
            <h1 className={styles.ListTitle}>Course</h1>
            {displayList}
            <h1 className={styles.ListTitle}>Instructor</h1>
            {displayInstructorList}
            <button className={styles.AssignBtn} onClick={handleAssign}>
              Assign Instructor
            </button>
          </form>
          <footer>© Built and Designed by SRZ</footer>
        </div>
      </div>
    </>
  );
};

export default AssignInstructor;
