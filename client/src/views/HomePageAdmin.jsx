import React, { useRef, useEffect, useState } from "react";
import styles from "./HomePageAdmin.module.css";
import { Link } from "react-router-dom";
import OutlineCard from "../components/OutlineCard";
import axios from "axios";
import Header from "../components/Header";

const HomePageAdmin = () => {
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
          <div className={styles.title}>Previous Outlines</div>
          <div className={styles.PostTitle}></div>
          <div
            className={styles.LeftScroll}
            onMouseEnter={() => setIsHovered("left2")}
            onMouseLeave={() => setIsHovered(false)}
            ref={left2}
          ></div>
          <div ref={containerRef2} className={styles.YOutline} id="Outlines">
            <Link to="/COTemplate">
              <button className={styles.COTemp}>+</button>
            </Link>
            {displayList}
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

export default HomePageAdmin;
