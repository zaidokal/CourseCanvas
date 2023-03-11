import React, { useRef, useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import OutlineCard from "../components/OutlineCard";
import axios from "axios";
import WesternLogoMini from "../Images/WesternLogoMini.png";
import Arrow from "../Images/Arrow.png";

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

  const displayList = outlineList.outlines.map((out) => (
    <OutlineCard outline={out} key={out._id} />
  ));
  const scrollRef = useRef(null); // define the ref

  function handleClick() {
    const scrollableNode = scrollRef.current;
    scrollableNode.scrollLeft += 20;
  }

  const containerRef = useRef(null);
  const handleMouseMove = (event) => {
    const container = containerRef.current;

    const containerWidth = container.clientWidth;
    const mousePositionX = event.clientX;

    if (mousePositionX >= containerWidth - container.scrollLeft) {
      container.scrollLeft += 20;
    } else if (mousePositionX <= container.scrollLeft) {
      container.scrollLeft -= 20;
    }
  };

  const containerRef2 = useRef(null);
  const handleMouseMove2 = (event) => {
    const container2 = containerRef2.current;

    const containerWidth = container2.clientWidth;
    const mousePositionX = event.clientX;

    if (mousePositionX >= containerWidth - container2.scrollLeft) {
      container2.scrollLeft += 20;
    } else if (mousePositionX <= container2.scrollLeft) {
      container2.scrollLeft -= 20;
    }
  };

  return (
    <>
      <div className={styles.MainDiv}>
        <div className={styles.Head}>
          <img
            className={styles.WesternLogoMini}
            src={WesternLogoMini}
            alt="My Image"
          />

          <div className={styles.OutlineManager}>Outline Manager</div>

          <Link to="/AssignInstructor">
            <button className={styles.LinkButtons}>AssignInstructor</button>
          </Link>
          <Link to="/AdminApproval">
            <button className={styles.LinkButtons}>AdminApproval</button>
          </Link>

          <div className={styles.RightDiv}>
            <div className={styles.UsernameDiv}>
              <p>FirstName LastName</p>
            </div>

            <div className={styles.logoutDiv}>
              <Link to="/">
                <button className={styles.logoutBtn}>Logout</button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.title}>Previous Outlines</div>

          <div
            onMouseMove={handleMouseMove}
            ref={containerRef}
            // ref={scrollRef}
            className={styles.YOutline}
            id="Outlines"
          >
            <Link to="/COTemplate">
              <button className={styles.COTemp}>+</button>
            </Link>
            {displayList}
          </div>
          <button className={styles.ScrollBtn} onClick={handleClick}>
            <img className={styles.Arrow} src={Arrow} alt="My Image" />
          </button>
        </div>

        <div className={styles.container}>
          <div className={styles.title}>Previous Outlines</div>

          <div
            onMouseMove={handleMouseMove2}
            ref={containerRef2}
            // ref={scrollRef}
            className={styles.YOutline}
            id="Outlines"
          >
            <Link to="/COTemplate">
              <button className={styles.COTemp}>+</button>
            </Link>
            {displayList}
          </div>
          <button className={styles.ScrollBtn} onClick={handleClick}>
            <img className={styles.Arrow} src={Arrow} alt="My Image" />
          </button>
        </div>
        <div className={styles.footer}>© Built and Designed by SRZ</div>
      </div>
    </>
  );
};

export default HomePage;
