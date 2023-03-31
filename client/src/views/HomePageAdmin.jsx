import React, { useRef, useEffect, useState } from "react";
import styles from "./HomePageAdmin.module.css";
import { Link } from "react-router-dom";
import OutlineCard from "../components/OutlineCard";
import axios from "axios";
import Header from "../components/Header";
import { REACT_APP_IP, REACT_APP_PORT } from "../config";

const HomePageAdmin = () => {
  const [user_type, setUser_type] = useState(null);

  useEffect(() => {
    axios
      .get(`http://${REACT_APP_IP}:${REACT_APP_PORT}/api/secure/user-info`, {
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
      console.log(user_type);

      if (user_type !== null) {
        if (user_type === "admin") {
        } else if (user_type === "programDirector") {
          window.location.href = "/HomePageDirector";
        } else {
          window.location.href = "/HomePage";
        }
      } else {
        window.location.href = "/Login";
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [user_type]);

  const [outlineList, setOutlineList] = useState({
    outlines: [],
  });

  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const right = useRef(null);
  const left = useRef(null);

  useEffect(() => {
    axios
      .get(
        `http://${REACT_APP_IP}:${REACT_APP_PORT}/api/secure/all-outlines-approval`,
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
      })
      .catch((err) => {
        console.log("Error in OutlineList");
      });
  }, []);

  const displayList = outlineList.outlines.map((out) => (
    <OutlineCard outline={out} key={out._id} />
  ));

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
          <Link to="/AssignInstructor">
            <button className={styles.LinkButtons}>Assign Instructor</button>
          </Link>
          <Link to="/AdminApproval">
            <button className={styles.LinkButtons}>Admin Approval</button>
          </Link>
        </div>

        <div className={styles.footer}>© Built and Designed by SRZ</div>
      </div>
    </>
  );
};

export default HomePageAdmin;
