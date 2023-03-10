import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./ViewSingleOutline.module.css";
import AccountButton from "../components/AccountButton";
import RequestApproval from "../components/RequestApproval";

import html2pdf from "html2pdf.js";

const ViewSingleOutline = () => {
  const { id } = useParams();

  const [userInput, setUserInput] = useState({
    courseName: "",
    year: "",
    description: "",
    instructor: "",
    instructorDetails: "",
    consultationHours: "",
    academicCalendar: "",
    contactHours: "",
    antirequisite: "",
    prerequisites: "",
    corequisite: "",
    ceab: "",
    textbook: "",
    requiredReferences: "",
    recommendedReferences: "",
    knowledgeBase: "",
    engineeringTools: "",
    impact: "",
    problemAnalysis: "",
    individualAndTeamWork: "",
    ethicsEquity: "",
    investigation: "",
    communicationSkills: "",
    economicsProject: "",
    design: "",
    professionalism: "",
    lifeLongLearning: "",
    topic1: "",
    topic1a: "",
    topic1b: "",
    topic2: "",
    topic2a: "",
    topic2b: "",
    topic3: "",
    topic3a: "",
    topic3b: "",
    topic4: "",
    topic4a: "",
    topic4b: "",
    homeworkAssignments: "",
    quizzes: "",
    laboratory: "",
    midterm: "",
    homeworkAssignmentsDesc: "",
    quizzesDesc: "",
    laboratoryDesc: "",
    midtermDesc: "",
    lateSubmission: "",
    lockerNum: "",
    electronicDevices: "",
    clickers: "",
    approved: "",
    requestApproval: "",
    decision: "",
  });

  useEffect(() => {
    const urlA = `http://localhost:8000/api/secure/${id}`;
    const urlB = "/course-outline/:outlineID";

    axios
      .get(urlA, urlB, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })

      .then((res) => {
        setUserInput({
          courseName: res.data.courseName,
          year: res.data.year,
          description: res.data.description,
          instructor: res.data.instructor,
          instructorDetails: res.data.instructorDetails,
          consultationHours: res.data.consultationHours,
          academicCalendar: res.data.academicCalendar,
          contactHours: res.data.contactHours,
          antirequisite: res.data.antirequisite,
          prerequisites: res.data.prerequisites,
          corequisite: res.data.corequisite,
          ceab: res.data.ceab,
          textbook: res.data.textbook,
          requiredReferences: res.data.requiredReferences,
          recommendedReferences: res.data.recommendedReferences,
          knowledgeBase: res.data.knowledgeBase,
          engineeringTools: res.data.engineeringTools,
          impact: res.data.impact,
          problemAnalysis: res.data.problemAnalysis,
          individualAndTeamWork: res.data.individualAndTeamWork,
          ethicsEquity: res.data.ethicsEquity,
          investigation: res.data.investigation,
          communicationSkills: res.data.communicationSkills,
          economicsProject: res.data.economicsProject,
          design: res.data.design,
          professionalism: res.data.professionalism,
          lifeLongLearning: res.data.lifeLongLearning,

          topic1: res.data.topics.topic1,
          topic1a: res.data.topics.topic1a,
          topic1b: res.data.topics.topic1b,
          topic2: res.data.topics.topic2,
          topic2a: res.data.topics.topic2a,
          topic2b: res.data.topics.topic2b,
          topic3: res.data.topics.topic3,
          topic3a: res.data.topics.topic3a,
          topic3b: res.data.topics.topic3b,
          topic4: res.data.topics.topic4,
          topic4a: res.data.topics.topic4a,
          topic4b: res.data.topics.topic4b,

          homeworkAssignments: res.data.assessments.homeworkAssignments,
          quizzes: res.data.assessments.quizzes,
          laboratory: res.data.assessments.laboratory,
          midterm: res.data.assessments.midterm,
          homeworkAssignmentsDesc: res.data.assessments.homeworkAssignmentsDesc,
          quizzesDesc: res.data.assessments.quizzesDesc,
          laboratoryDesc: res.data.assessments.laboratoryDesc,
          midtermDesc: res.data.assessments.midtermDesc,

          lateSubmission: res.data.lateSubmission,
          lockerNum: res.data.lockerNum,
          electronicDevices: res.data.electronicDevices,
          clickers: res.data.clickers,

          approved: res.data.approved,
          requestApproval: res.data.requestApproval,
          decision: res.data.decision,
        });
      })
      .catch((err) => {
        console.log("Error in MemoryList" + err);
      });
  });

  const handlePrintClick = () => {
    window.print();
  };

  const outline = { _id: id };

  const handleApproval = (data) => {
    console.log("Approval data:", data);
  };

  const contentRef = useRef(null);

  const handleDownload = () => {
    if (userInput.approved) {
      const content = contentRef.current;
      const options = {
        margin: 0.5,
        filename: userInput.courseName,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf().set(options).from(content).save();
    }
  };

  return (
    <>
      <div className={styles.header}>
        <AccountButton text={"HomePage"} linkTo={"/HomePage"} />
      </div>
      <div>
        <button
          className={styles.downloadBTN}
          disabled={!userInput.approved}
          onClick={handleDownload}
        >
          {userInput.approved} Download
        </button>
      </div>
      <RequestApproval outline={outline} onApprove={handleApproval} />

      <div className={styles.header}>
        <p>Approval Status:</p>
      </div>

      <input
        className={styles.input2}
        value={userInput.decision}
        name="requestApproval"
        placeholder="Status"
      ></input>
      <div ref={contentRef} className={styles.MainDiv}>
        <p align="center">
          <strong>Western University</strong> <br />
          <strong>Faculty of Engineering</strong> <br />
          <strong>Department of Electrical and Computer Engineering</strong>
        </p>
        <p align="center">
          <strong>
            <input
              className={styles.input}
              value={userInput.courseName}
              name="courseName"
              placeholder="ECE XXXXA/B: Course Title"
            ></input>
          </strong>
          <br />
          <strong>
            Course Outline 20
            <input
              className={styles.input}
              value={userInput.year}
              name="year"
              placeholder="YY-YY"
            ></input>
          </strong>
        </p>
        <p>
          <strong>Description: </strong>
        </p>
        <input
          className={styles.Description}
          value={userInput.description}
          name="description"
          placeholder="Description..."
        ></input>
        <p>
          <strong>Instructor:</strong>
          <input
            className={styles.input2}
            value={userInput.instructor}
            name="instructor"
            placeholder="Dr. Name, P.Eng."
          ></input>
        </p>
        <input
          className={styles.input2}
          value={userInput.instructorDetails}
          name="instructorDetails"
          placeholder="TEB XXX, 519-661-2111 ext. XXXXX, XXXX@uwo.ca"
        ></input>
        <br />
        <strong>Consultation hours:</strong>

        <input
          className={styles.input2}
          value={userInput.consultationHours}
          name="consultationHours"
          placeholder="Consultation hours:"
        ></input>
        <br />

        <p>
          <strong>Academic Calendar Copy:</strong>
          <input
            className={styles.input2}
            value={userInput.academicCalendar}
            name="academicCalendar"
            placeholder="Add link"
          ></input>
        </p>
        <p>
          <strong>Contact Hours:</strong>
          <input
            className={styles.input2}
            value={userInput.contactHours}
            name="contactHours"
            placeholder="X lecture hours, Y laboratory hours, Z tutorial hours, 0.5 course."
          ></input>
        </p>
        <p>
          <strong>Antirequisite:</strong>
          <input
            className={styles.input2}
            value={userInput.antirequisite}
            name="antirequisite"
            placeholder="Add"
          ></input>
        </p>
        <p>
          <strong>Prerequisites:</strong>
          <input
            className={styles.input2}
            value={userInput.prerequisites}
            name="prerequisites"
            placeholder="Add"
          ></input>
        </p>
        <p>
          <strong>Co-requisite:</strong>
          <input
            className={styles.input2}
            value={userInput.corequisite}
            name="corequisite"
            placeholder="Add"
          ></input>
        </p>
        <p>
          Unless you have either the requisites for this course or written
          special permission from your Dean to enroll in it, you will be removed
          from this course and it will be deleted from your record. This
          decision may not be appealed. You will receive no adjustment to your
          fees in the event that you are dropped from a course for failing to
          have the necessary prerequisites.
        </p>
        <p>
          <strong>CEAB Academic Units:</strong>
          <input
            className={styles.input2}
            value={userInput.ceab}
            name="ceab"
            placeholder="Engineering Science X%, Engineering Design Y%."
          ></input>
        </p>
        <p>
          <strong>Required Textbook:</strong>
          <input
            className={styles.input2}
            value={userInput.textbook}
            name="textbook"
            placeholder="Add"
          ></input>
        </p>
        <p>
          <strong>Other Required References:</strong>
          <input
            className={styles.input2}
            value={userInput.requiredReferences}
            name="requiredReferences"
            placeholder="Add"
          ></input>
        </p>
        <p>
          <strong>Recommended References:</strong>
          <input
            className={styles.input2}
            value={userInput.recommendedReferences}
            name="recommendedReferences"
            placeholder="Add"
          ></input>
        </p>
        <strong>
          <br clear="all" />
        </strong>
        <p>
          <strong>
            General Learning Objectives (CEAB Graduate Attributes)
          </strong>
        </p>
        <div align="center">
          <table border="0" cellSpacing="0" cellPadding="0" width="625">
            <tbody>
              <tr>
                <td width="176">
                  <p>Knowledge Base</p>
                </td>
                <td width="32">
                  <p align="center">
                    <input
                      className={styles.input3}
                      value={userInput.knowledgeBase}
                      name="knowledgeBase"
                      placeholder="x"
                    ></input>
                  </p>
                </td>
                <td width="176">
                  <p>Use of Engineering Tools</p>
                </td>
                <td width="32">
                  <p align="center">
                    {" "}
                    <input
                      className={styles.input3}
                      value={userInput.engineeringTools}
                      name="engineeringTools"
                      placeholder="x"
                    ></input>
                  </p>
                </td>
                <td width="176">
                  <p>Impact on Society and the Environment</p>
                </td>
                <td width="32">
                  <p align="center">
                    {" "}
                    <input
                      className={styles.input3}
                      value={userInput.impact}
                      name="impact"
                      placeholder="x"
                    ></input>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="176">
                  <p>Problem Analysis</p>
                </td>
                <td width="32">
                  <p align="center">
                    {" "}
                    <input
                      className={styles.input3}
                      value={userInput.problemAnalysis}
                      name="problemAnalysis"
                      placeholder="x"
                    ></input>
                  </p>
                </td>
                <td width="176">
                  <p>Individual and Team Work</p>
                </td>
                <td width="32">
                  <p align="center">
                    {" "}
                    <input
                      className={styles.input3}
                      value={userInput.individualAndTeamWork}
                      name="individualAndTeamWork"
                      placeholder="x"
                    ></input>
                  </p>
                </td>
                <td width="176">
                  <p>Ethics and Equity</p>
                </td>
                <td width="32">
                  <p align="center">
                    {" "}
                    <input
                      className={styles.input3}
                      value={userInput.ethicsEquity}
                      name="ethicsEquity"
                      placeholder="x"
                    ></input>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="176">
                  <p>Investigation</p>
                </td>
                <td width="32">
                  <p align="center">
                    {" "}
                    <input
                      className={styles.input3}
                      value={userInput.investigation}
                      name="investigation"
                      placeholder="x"
                    ></input>
                  </p>
                </td>
                <td width="176">
                  <p>Communication Skills</p>
                </td>
                <td width="32">
                  <p align="center">
                    {" "}
                    <input
                      className={styles.input3}
                      value={userInput.communicationSkills}
                      name="communicationSkills"
                      placeholder="x"
                    ></input>
                  </p>
                </td>
                <td width="176">
                  <p>Economics and Project Management</p>
                </td>
                <td width="32">
                  <p align="center">
                    {" "}
                    <input
                      className={styles.input3}
                      value={userInput.economicsProject}
                      name="economicsProject"
                      placeholder="x"
                    ></input>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="176">
                  <p>Design</p>
                </td>
                <td width="32">
                  <p align="center">
                    {" "}
                    <input
                      className={styles.input3}
                      value={userInput.design}
                      name="design"
                      placeholder="x"
                    ></input>
                  </p>
                </td>
                <td width="176">
                  <p>Professionalism</p>
                </td>
                <td width="32">
                  <p align="center">
                    {" "}
                    <input
                      className={styles.input3}
                      value={userInput.professionalism}
                      name="professionalism"
                      placeholder="x"
                    ></input>
                  </p>
                </td>
                <td width="176">
                  <p>Life-Long Learning</p>
                </td>
                <td width="32">
                  <p align="center">
                    {" "}
                    <input
                      className={styles.input3}
                      value={userInput.lifeLongLearning}
                      name="lifeLongLearning"
                      placeholder="x"
                    ></input>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Notation
          <em>
            : where x be I: Introductory, D: Intermediate, A: Advanced, or empty
          </em>
          . I – The instructor will introduce the topic at the level required.
          It is not necessary for the student to have seen the material before.
          D – There may be a reminder or review, but the student is expected to
          have seen and been tested on the material before taking the course. A
          – It is expected that the student can apply the knowledge without
          prompting (e.g. no review).
        </p>
        <table border="0" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td width="491" valign="top">
                <p>
                  <strong>Course Topics and Specific Learning Outcomes</strong>
                </p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong>CEAB Graduate Attributes Indicators</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>
                  <strong>1. </strong>
                  <strong>
                    <input
                      className={styles.input}
                      value={userInput.topic1}
                      name="topic1"
                      placeholder="Topic X"
                    ></input>
                  </strong>
                  <strong></strong>
                </p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong></strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>At the end of this section, students will be able to:</p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong></strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>
                  <strong>
                    a.{" "}
                    <input
                      className={styles.Description}
                      value={userInput.topic1a}
                      name="topic1a"
                      placeholder="x"
                    ></input>
                  </strong>
                </p>
              </td>
              <td width="132" valign="top"></td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>
                  <strong>
                    b.{" "}
                    <input
                      className={styles.Description}
                      value={userInput.topic1b}
                      name="topic1b"
                      placeholder="x"
                    ></input>
                  </strong>
                </p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong> </strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>
                  <strong>2. </strong>
                  <strong>
                    <input
                      className={styles.input}
                      value={userInput.topic2}
                      name="topic2"
                      placeholder="Topic X"
                    ></input>
                  </strong>
                  <strong></strong>
                </p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong></strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>At the end of this section, students will be able to:</p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong></strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>
                  <strong>
                    a.{" "}
                    <input
                      className={styles.Description}
                      value={userInput.topic2a}
                      name="topic2a"
                      placeholder="x"
                    ></input>
                  </strong>
                </p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong></strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>
                  <strong>
                    b.{" "}
                    <input
                      className={styles.Description}
                      value={userInput.topic2b}
                      name="topic2b"
                      placeholder="x"
                    ></input>
                  </strong>
                </p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong></strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>
                  <strong>3. </strong>
                  <strong>
                    <input
                      className={styles.input}
                      value={userInput.topic3}
                      name="topic3"
                      placeholder="Topic X"
                    ></input>
                  </strong>
                  <strong></strong>
                </p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong></strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>At the end of this section, students will be able to:</p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong></strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>
                  <strong>
                    a.{" "}
                    <input
                      className={styles.Description}
                      value={userInput.topic3a}
                      name="topic3a"
                      placeholder="x"
                    ></input>
                  </strong>
                </p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong></strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>
                  <strong>
                    b.{" "}
                    <input
                      className={styles.Description}
                      value={userInput.topic3b}
                      name="topic3b"
                      placeholder="x"
                    ></input>
                  </strong>
                </p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong></strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>
                  <strong>4. </strong>
                  <strong>
                    <input
                      className={styles.input}
                      value={userInput.topic4}
                      name="topic4"
                      placeholder="Topic X"
                    ></input>
                  </strong>
                  <strong></strong>
                </p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong></strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>At the end of this section, students will be able to:</p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong></strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>
                  <strong>
                    a.{" "}
                    <input
                      className={styles.Description}
                      value={userInput.topic4a}
                      name="topic4a"
                      placeholder="x"
                    ></input>
                  </strong>
                </p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong></strong>
                </p>
              </td>
            </tr>
            <tr>
              <td width="491" valign="top">
                <p>
                  <strong>
                    b.{" "}
                    <input
                      className={styles.Description}
                      value={userInput.topic4b}
                      name="topic4b"
                      placeholder="x"
                    ></input>
                  </strong>
                </p>
              </td>
              <td width="132" valign="top">
                <p>
                  <strong></strong>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Evaluation</strong>
        </p>
        <div align="center">
          <table border="0" cellSpacing="0" cellPadding="0" width="396">
            <tbody>
              <tr>
                <td width="276">
                  <p>
                    <strong>Course Component</strong>
                  </p>
                </td>
                <td width="120">
                  <p align="center">
                    <strong>Weight</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td width="276">
                  <p>Homework Assignments</p>
                </td>
                <td width="120">
                  <p align="center">
                    {" "}
                    <input
                      className={styles.input4}
                      value={userInput.homeworkAssignments}
                      name="homeworkAssignments"
                      placeholder="x"
                    ></input>
                    %
                  </p>
                </td>
              </tr>
              <tr>
                <td width="276">
                  <p>Quizzes</p>
                </td>
                <td width="120">
                  <p align="center">
                    <input
                      className={styles.input4}
                      value={userInput.quizzes}
                      name="quizzes"
                      placeholder="x"
                    ></input>
                    %
                  </p>
                </td>
              </tr>
              <tr>
                <td width="276">
                  <p>Laboratory</p>
                </td>
                <td width="120">
                  <p align="center">
                    <input
                      className={styles.input4}
                      value={userInput.laboratory}
                      name="laboratory"
                      placeholder="x"
                    ></input>
                    %
                  </p>
                </td>
              </tr>
              <tr>
                <td width="276">
                  <p>Midterm Test</p>
                </td>
                <td width="120">
                  <p align="center">
                    <input
                      className={styles.input4}
                      value={userInput.midterm}
                      name="midterm"
                      placeholder="x"
                    ></input>
                    %
                  </p>
                </td>
              </tr>
              <tr>
                <td width="276">
                  <p>Final Examination</p>
                </td>
                <td width="120">
                  <p align="center">50%</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          To obtain a passing grade in the course, a mark of 50% or more must be
          achieved on the final examination as well as on the laboratory. A
          final examination or laboratory mark &lt; 50% will result in a final
          course grade of 48% or less.
        </p>
        <p>
          <strong>Homework Assignments:</strong>
          <input
            className={styles.Description}
            value={userInput.homeworkAssignmentsDesc}
            name="homeworkAssignmentsDesc"
            placeholder="Description"
          ></input>
        </p>
        <p>
          <strong>Quizzes:</strong>
          <input
            className={styles.Description}
            value={userInput.quizzesDesc}
            name="quizzesDesc"
            placeholder="Description"
          ></input>
        </p>
        <p>
          <strong>Laboratory:</strong>
          <input
            className={styles.Description}
            value={userInput.laboratoryDesc}
            name="laboratoryDesc"
            placeholder="Description"
          ></input>
        </p>
        <p>
          <strong>Midterm Test:</strong>
          <input
            className={styles.Description}
            value={userInput.midtermDesc}
            name="midtermDesc"
            placeholder="Description"
          ></input>
        </p>
        <p>
          <strong>Final Examination:</strong>
          The final examination will be take place during the regular
          examination period.
        </p>
        <p>
          <strong>Late Submission Policy: </strong>
          <input
            className={styles.Description}
            value={userInput.lateSubmission}
            name="lateSubmission"
            placeholder="Description"
          ></input>
        </p>
        <p>
          <strong>Assignment Submission Locker: </strong>
          Locker{" "}
          <input
            className={styles.input}
            value={userInput.lockerNum}
            name="lockerNum"
            placeholder="XXX"
          ></input>{" "}
          located on the second floor of TEB.
        </p>
        <p>
          <strong>Use of English: </strong>
          In accordance with Senate and Faculty Policy, students may be
          penalized up to 10% of the marks on all assignments, tests, and
          examinations for improper use of English. Additionally, poorly written
          work with the exception of the final examination may be returned
          without grading. If resubmission of the work is permitted, it may be
          graded with marks deducted for poor English and/or late submission.
        </p>
        <p>
          <strong>Attendance:</strong>
          Any student who, in the opinion of the instructor, is absent too
          frequently from class, laboratory, or tutorial periods will be
          reported to the Dean (after due warning has been given). On the
          recommendation of the department, and with the permission of the Dean,
          the student will be debarred from taking the regular final examination
          in the course.
        </p>
        <p>
          <strong>Absence Due to Illness or Other Circumstances:</strong>
          Students should immediately consult with the instructor or department
          Chair if they have any problems that could affect their performance in
          the course. Where appropriate, the problems should be documented (see
          the attached “Instructions for Students Unable to Write Tests or
          Examinations or Submit Assignments as Scheduled”). The student should
          seek advice from the instructor or department Chair regarding how best
          to deal with the problem. Failure to notify the instructor or
          department Chair immediately (or as soon as possible thereafter) will
          have a negative effect on any appeal.
        </p>
        <p>
          For more information concerning medical accommodations, see the
          relevant section of the Academic Handbook:
        </p>
        <p>
          <a href="http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_medical.pdf">
            http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_medical.pdf
          </a>
        </p>
        <p>
          For more information concerning accommodations for religious holidays,
          see the relevant section of the Academic Handbook:
        </p>
        <p>
          <a href="http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_religious.pdf">
            http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_religious.pdf
          </a>
        </p>
        <p>
          <strong>Missed Midterm Examinations: </strong>
          If a student misses a midterm examination, she or he must follow the
          Instructions for Students Unable to Write Tests and provide
          documentation to Undergraduate Services Office within 24 hours of the
          missed test. If accommodation is granted, the department will decide
          whether to provide a make-up test or allow reweighting of the test,
          where reweighting means the marks normally allotted for the midterm
          will be added to the final exam. If no reasonable justification for
          missing the test can be found, then the student will receive a mark of
          zero for the test.
        </p>
        <p>
          If a student is going to miss the midterm examination for religious
          reasons, they must inform the instructor in writing within 48 hours of
          the announcement of the exam date or they will be required to write
          the exam.
        </p>
        <p>
          <strong></strong>
        </p>
        <p>
          <strong>Cheating and Plagiarism:</strong>
          Students must write their essays and assignments in their own words.
          Whenever students take an idea or a passage from another author, they
          must acknowledge their debt both by using quotation marks where
          appropriate and by proper referencing such as footnotes or citations.
          University policy states that cheating, including plagiarism, is a
          scholastic offence. The commission of a scholastic offence is attended
          by academic penalties, which might include expulsion from the program.
          If you are caught cheating, there will be no second warning.
        </p>
        <p>
          All required papers may be subject to submission for textual
          similarity review to commercial plagiarism-detection software under
          license to the University for the detection of plagiarism. All papers
          submitted will be included as source documents on the reference
          database for the purpose of detecting plagiarism of papers
          subsequently submitted to the system. Use of the service is subject to
          the licensing agreement, currently between the University of Western
          Ontario and Turnitin.com ({" "}
          <a href="http://www.turnitin.com/">http://www.turnitin.com</a>).
        </p>
        <p>
          Scholastic offences are taken seriously and students are directed to
          read the appropriate policy, specifically, the definition of what
          constitutes a Scholastic Offence, in the relevant section of the
          Academic Handbook:
        </p>
        <p>
          <a href="http://www.uwo.ca/univsec/pdf/academic_policies/appeals/scholastic_discipline_undergrad.pdf">
            http://www.uwo.ca/univsec/pdf/academic_policies/appeals/scholastic_discipline_undergrad.pdf
          </a>
        </p>
        <p>
          <strong>Use of Electronic Devices: </strong>
          <input
            className={styles.Description}
            value={userInput.electronicDevices}
            name="electronicDevices"
            placeholder="Description"
          ></input>
        </p>
        <p>
          <strong>Use of Personal Response Devices (“Clickers”): </strong>
          <input
            className={styles.Description}
            value={userInput.clickers}
            name="clickers"
            placeholder="Description"
          ></input>
        </p>
        <p>
          <strong>Policy on Repeating All Components of a Course: </strong>
          Students who are required to repeat an Engineering course must repeat
          all components of the course. No special permissions will be granted
          enabling a student to retain laboratory, assignment, or test marks
          from previous years. Previously completed assignments and laboratories
          cannot be resubmitted by the student for grading in subsequent years.
        </p>
        <p>
          <strong>Internet and Electronic Mail:</strong>
          Students are responsible for regularly checking their Western e‑mail
          and the course web site ({" "}
          <a href="https://owl.uwo.ca/portal/">https://owl.uwo.ca/portal/</a>)
          and making themselves aware of any information that is posted about
          the course.
        </p>
        <p>
          <strong>Accessibility:</strong>
          Please contact the course instructor if you require material in an
          alternate format or if any other arrangements can make this course
          more accessible to you. You may also wish to contact Services for
          Students with Disabilities (SSD) at 519-661-2111 ext. 82147 for any
          specific question regarding an accommodation.
        </p>
        <p>
          <strong>Support Services: </strong>
          Office of the Registrar,{" "}
          <a href="http://www.registrar.uwo.ca/">
            http://www.registrar.uwo.ca/
          </a>
        </p>
        <p>
          Student Development Centre,{" "}
          <a href="http://www.sdc.uwo.ca/">http://www.sdc.uwo.ca/</a>
        </p>
        <p>
          Engineering Undergraduate Services,
          <a href="http://www.eng.uwo.ca/undergraduate/">
            http://www.eng.uwo.ca/undergraduate/
          </a>
        </p>
        <p>
          USC Student Support Services,{" "}
          <a href="http://westernusc.ca/services/">
            http://westernusc.ca/services/
          </a>
        </p>
        <p>
          <strong></strong>
        </p>
        <p>
          Students who are in emotional/mental distress should refer to Mental
          Health @ Western,
          <a href="http://www.health.uwo.ca/mental_health/">
            http://www.health.uwo.ca/mental_health/
          </a>
          , for a complete list of options about how to obtain help.
        </p>
        <br />
      </div>
    </>
  );
};

export default ViewSingleOutline;
