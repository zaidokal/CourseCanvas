import React, { useState } from "react";
import AccountButton from "../components/AccountButton";
import styles from "./COTemplate.module.css";

const COTemplate = () => {
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
  });

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.name + " " + e.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = () => {
    axios
      .put(`http://localhost:8000/secure/create-outline/${id}`, {
        courseName: userInput.courseName,
        year: userInput.year,
        description: userInput.description,
        instructor: userInput.instructor,
        instructorDetails: userInput.instructorDetails,
        consultationHours: userInput.consultationHours,
        academicCalendar: userInput.academicCalendar,
        contactHours: userInput.contactHours,
        antirequisite: userInput.antirequisite,
        prerequisites: userInput.prerequisites,
        corequisite: userInput.corequisite,
        ceab: userInput.ceab,
        textbook: userInput.textbook,
        requiredReferences: userInput.requiredReferences,
        recommendedReferences: userInput.recommendedReferences,
        knowledgeBase: userInput.knowledgeBase,
        engineeringTools: userInput.engineeringTools,
        impact: userInput.impact,
        problemAnalysis: userInput.problemAnalysis,
        individualAndTeamWork: userInput.individualAndTeamWork,
        ethicsEquity: userInput.ethicsEquity,
        investigation: userInput.investigation,
        communicationSkills: userInput.communicationSkills,
        economicsProject: userInput.economicsProject,
        design: userInput.design,
        professionalism: userInput.professionalism,
        lifeLongLearning: userInput.lifeLongLearning,
        topic1: userInput.topic1,
        topic1a: userInput.topic1a,
        topic1b: userInput.topic1b,
        topic2: userInput.topic2,
        topic2a: userInput.topic2a,
        topic2b: userInput.topic2b,
        topic3: userInput.topic3,
        topic3a: userInput.topic3a,
        topic3b: userInput.topic3b,
        topic4: userInput.topic4,
        topic4a: userInput.topic4a,
        topic4b: userInput.topic4b,
        homeworkAssignments: userInput.homeworkAssignments,
        quizzes: userInput.quizzes,
        laboratory: userInput.laboratory,
        midterm: userInput.midterm,
        homeworkAssignmentsDesc: userInput.homeworkAssignmentsDesc,
        quizzesDesc: userInput.quizzesDesc,
        laboratoryDesc: userInput.laboratoryDesc,
        midtermDesc: userInput.midtermDesc,
        lateSubmission: userInput.lateSubmission,
        lockerNum: userInput.lockerNum,
        electronicDevices: userInput.electronicDevices,
        clickers: userInput.clickers,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert("Bad Request, please fill out ALL required fields.");
        console.log(err.response);
      });
  };

  return (
    <>
      <div className={styles.header}>
        <AccountButton
          text={"Create"}
          linkTo={"/HomePage"}
          // onClick={handleSubmit}
        />
      </div>

      <div>
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
              onChange={handleChange}
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
              onChange={handleChange}
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
          onChange={handleChange}
          placeholder="Description..."
        ></input>
        <p>
          <strong>Instructor:</strong>
          <input
            className={styles.input2}
            value={userInput.instructor}
            name="instructor"
            onChange={handleChange}
            placeholder="Dr. Name, P.Eng."
          ></input>
        </p>
        <input
          className={styles.input2}
          value={userInput.instructorDetails}
          name="instructorDetails"
          onChange={handleChange}
          placeholder="TEB XXX, 519-661-2111 ext. XXXXX, XXXX@uwo.ca"
        ></input>
        <br />
        <strong>Consultation hours:</strong>

        <input
          className={styles.input2}
          value={userInput.consultationHours}
          name="consultationHours"
          onChange={handleChange}
          placeholder="Consultation hours:"
        ></input>
        <br />

        <p>
          <strong>Academic Calendar Copy:</strong>
          <input
            className={styles.input2}
            value={userInput.academicCalendar}
            name="academicCalendar"
            onChange={handleChange}
            placeholder="Add link"
          ></input>
        </p>
        <p>
          <strong>Contact Hours:</strong>
          <input
            className={styles.input2}
            value={userInput.contactHours}
            name="contactHours"
            onChange={handleChange}
            placeholder="X lecture hours, Y laboratory hours, Z tutorial hours, 0.5 course."
          ></input>
        </p>
        <p>
          <strong>Antirequisite:</strong>
          <input
            className={styles.input2}
            value={userInput.antirequisite}
            name="antirequisite"
            onChange={handleChange}
            placeholder="Add"
          ></input>
        </p>
        <p>
          <strong>Prerequisites:</strong>
          <input
            className={styles.input2}
            value={userInput.prerequisites}
            name="prerequisites"
            onChange={handleChange}
            placeholder="Add"
          ></input>
        </p>
        <p>
          <strong>Co-requisite:</strong>
          <input
            className={styles.input2}
            value={userInput.corequisite}
            name="corequisite"
            onChange={handleChange}
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
            onChange={handleChange}
            placeholder="Engineering Science X%, Engineering Design Y%."
          ></input>
        </p>
        <p>
          <strong>Required Textbook:</strong>
          <input
            className={styles.input2}
            value={userInput.textbook}
            name="textbook"
            onChange={handleChange}
            placeholder="Add"
          ></input>
        </p>
        <p>
          <strong>Other Required References:</strong>
          <input
            className={styles.input2}
            value={userInput.requiredReferences}
            name="requiredReferences"
            onChange={handleChange}
            placeholder="Add"
          ></input>
        </p>
        <p>
          <strong>Recommended References:</strong>
          <input
            className={styles.input2}
            value={userInput.recommendedReferences}
            name="recommendedReferences"
            onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
            onChange={handleChange}
            placeholder="Description"
          ></input>
        </p>
        <p>
          <strong>Quizzes:</strong>
          <input
            className={styles.Description}
            value={userInput.quizzesDesc}
            name="quizzesDesc"
            onChange={handleChange}
            placeholder="Description"
          ></input>
        </p>
        <p>
          <strong>Laboratory:</strong>
          <input
            className={styles.Description}
            value={userInput.laboratoryDesc}
            name="laboratoryDesc"
            onChange={handleChange}
            placeholder="Description"
          ></input>
        </p>
        <p>
          <strong>Midterm Test:</strong>
          <input
            className={styles.Description}
            value={userInput.midtermDesc}
            name="midtermDesc"
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            placeholder="Description"
          ></input>
        </p>
        <p>
          <strong>Use of Personal Response Devices (“Clickers”): </strong>
          <input
            className={styles.Description}
            value={userInput.clickers}
            name="clickers"
            onChange={handleChange}
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

export default COTemplate;
