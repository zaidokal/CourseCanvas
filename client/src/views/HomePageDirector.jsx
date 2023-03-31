import React, { useRef, useEffect, useState } from "react";
import styles from "./HomePageDirector.module.css";
import { Link } from "react-router-dom";
import OutlineCard from "../components/OutlineCard";
import axios from "axios";
import Header from "../components/Header";

const HomePageDirector = () => {
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
      if (user_type === "programDirector") {
      } else if (user_type === "admin") {
        window.location.href = "/HomePageAdmin";
      } else {
        window.location.href = "/HomePage";
      }
    }
  }, [user_type]);

  const [courseNames, setCourseNames] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [outlineList, setOutlineList] = useState({ outlines: [] });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/secure/instructor/assigned-courses", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data[0].assignedCourses);
        setCourseNames(response.data[0].assignedCourses);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (selectedCourse) {
      axios
        .get(
          `http://localhost:8000/api/secure/${selectedCourse}/all-outlines`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          setOutlineList({
            outlines: res.data,
          });
          console.log(res.data);
        })
        .catch((err) => {
          console.log("Error in OutlineList");
        });
    }
  }, [selectedCourse]);

  const displayCourses = (
    <select
      className={styles.DirectorCourseSelect}
      value={selectedCourse}
      onChange={(e) => setSelectedCourse(e.target.value)}
    >
      <option>Filter Course</option>
      {courseNames.map((cou) => (
        <option key={cou} value={cou}>
          {cou}
        </option>
      ))}
    </select>
  );

  const displayList = outlineList.outlines.map((out) => (
    <OutlineCard outline={out} key={out._id} />
  ));

  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const right = useRef(null);
  const left = useRef(null);

  const handleScrolling = () => {
    const container = containerRef.current;

    if (isHovered === "right") {
      container.scrollLeft += 70;
    } else if (isHovered === "left") {
      container.scrollLeft -= 70;
    } else {
      clearInterval(scrollIntervalRef.current);
    }
  };
  useEffect(() => {
    if (isHovered) {
      scrollIntervalRef.current = setInterval(handleScrolling, 100);
    } else {
      clearInterval(scrollIntervalRef.current);
    }
  });

  return (
    <>
      <Header></Header>

      <div className={styles.MainDiv}>
        {displayCourses}

        <div className={styles.container}>
          <div className={styles.title}>All Outlines</div>
          <div className={styles.PostTitle}></div>
          <div
            className={styles.LeftScroll}
            onMouseEnter={() => setIsHovered("left")}
            onMouseLeave={() => setIsHovered(false)}
            ref={left}
          ></div>
          <div ref={containerRef} className={styles.YOutline} id="Outlines">
            {displayList}
          </div>
          <div
            className={styles.RightScroll}
            onMouseEnter={() => setIsHovered("right")}
            onMouseLeave={() => setIsHovered(false)}
            ref={right}
          ></div>
        </div>

        <div className={styles.ButtonDiv}>
          <Link to="/AdminApproval">
            <button className={styles.LinkButtons}>Admin Approval</button>
          </Link>
        </div>

        <div className={styles.footer}>© Built and Designed by SRZ</div>
      </div>
    </>
  );
};

export default HomePageDirector;
