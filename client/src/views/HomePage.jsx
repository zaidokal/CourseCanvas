import React, { useRef, useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import OutlineCard from "../components/OutlineCard";
import axios from "axios";
import Header from "../components/Header";

const HomePage = () => {
  const [outlineList, setOutlineList] = useState({
    outlines: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/secure/all-outlines", {
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
    .filter((out) => out.recency === "New")

    .map((out) => <OutlineCard outline={out} key={out._id} />);

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

  const containerRef2 = useRef(null);
  const scrollIntervalRef2 = useRef(null);
  const right2 = useRef(null);
  const left2 = useRef(null);

  const handleScrolling2 = () => {
    const container2 = containerRef2.current;

    if (isHovered === "right2") {
      container2.scrollLeft += 70;
    } else if (isHovered === "left2") {
      container2.scrollLeft -= 70;
    } else {
      clearInterval(scrollIntervalRef2.current);
    }
  };

  useEffect(() => {
    if (isHovered) {
      scrollIntervalRef2.current = setInterval(handleScrolling2, 100);
    } else {
      clearInterval(scrollIntervalRef2.current);
    }
  });

  const [courseNames, setCourseNames] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [outlineList2, setOutlineList2] = useState({ outlines: [] });

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
          setOutlineList2({
            outlines: res.data,
          });
        })
        .catch((err) => {
          console.log("Error in OutlineList2");
        });
    } else {
      axios
        .get("http://localhost:8000/api/secure/all-outlines", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((res) => {
          setOutlineList2({
            outlines: res.data,
          });
        })
        .catch((err) => {
          console.log("Error in OutlineList2");
        });
    }
  }, [selectedCourse]);

  const displayCourses = (
    <select
      className={styles.Filter}
      value={selectedCourse}
      onChange={(e) => setSelectedCourse(e.target.value)}
    >
      <option value="">Filter Course</option>
      {courseNames.map((cou) => (
        <option key={cou} value={cou}>
          {cou}
        </option>
      ))}
    </select>
  );

  const displayList2 = outlineList2.outlines.map((out) => (
    <OutlineCard outline={out} key={out._id} />
  ));

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
    const timeoutId = setTimeout(() => {
      if (user_type !== null) {
      } else {
        window.location.href = "/Login";
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [user_type]);

  return (
    <>
      <Header></Header>
      <div className={styles.MainDiv}>
        <div className={styles.container}>
          <div className={styles.title}>Current Outlines</div>
          <div className={styles.PostTitle}></div>
          <div
            className={styles.LeftScroll}
            onMouseEnter={() => setIsHovered("left")}
            onMouseLeave={() => setIsHovered(false)}
            ref={left}
          ></div>
          <div ref={containerRef} className={styles.YOutline} id="Outlines">
            <Link to="/COTemplate">
              <button className={styles.COTemp}>+</button>
            </Link>
            {displayList}
          </div>
          <div
            className={styles.RightScroll}
            onMouseEnter={() => setIsHovered("right")}
            onMouseLeave={() => setIsHovered(false)}
            ref={right}
          ></div>
        </div>

        <div className={styles.container}>
          <div className={styles.title}>
            Previous Outlines - {displayCourses}
          </div>
          <div className={styles.PostTitle}></div>
          <div
            className={styles.LeftScroll}
            onMouseEnter={() => setIsHovered("left2")}
            onMouseLeave={() => setIsHovered(false)}
            ref={left2}
          ></div>
          <div ref={containerRef2} className={styles.YOutline} id="Outlines">
            {displayList2}
          </div>
          <div
            className={styles.RightScroll}
            onMouseEnter={() => setIsHovered("right2")}
            onMouseLeave={() => setIsHovered(false)}
            ref={right2}
          ></div>
        </div>

        <div className={styles.footer}>© Built and Designed by SRZ</div>
      </div>
    </>
  );
};

export default HomePage;
