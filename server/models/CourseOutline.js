const mongoose = require("mongoose");

const CourseOutlineSchema = new mongoose.Schema({
  course_code: {
    type: String,
    required: true,
  },
  years: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  instructorDetails: {
    type: String,
    required: true,
  },
  consultationHours: {
    type: String,
    required: true,
  },
  academicCalendar: {
    type: String,
    required: true,
  },
  contactHours: {
    type: String,
    required: true,
  },
  antirequisite: {
    type: String,
    required: true,
  },
  prerequisite: {
    type: String,
    required: true,
  },
  corequisite: {
    type: String,
    required: true,
  },
  ceab: {
    type: String,
    required: true,
  },
  textbook: {
    type: String,
    required: true,
  },
  requiredReferences: {
    type: String,
    required: true,
  },
  recommendedReferences: {
    type: String,
    required: true,
  },
  knowledgeBase: {
    type: String,
    required: true,
  },
  engineeringTools: {
    type: String,
    required: true,
  },
  impact: {
    type: String,
    required: true,
  },
  problemAnalysis: {
    type: String,
    required: true,
  },
  individualAndTeamWork: {
    type: String,
    required: true,
  },
  ethicsEquity: {
    type: String,
    required: true,
  },
  investigation: {
    type: String,
    required: true,
  },
  communicationSkills: {
    type: String,
    required: true,
  },
  economicsProject: {
    type: String,
    required: true,
  },
  design: {
    type: String,
    required: true,
  },
  professionalism: {
    type: String,
    required: true,
  },
  lifeLongLearning: {
    type: String,
    required: true,
  },
  topics: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  assessments: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  homeworkAssignments: {
    type: String,
    required: true,
  },
  quizzes: {
    type: String,
    required: true,
  },
  laboratory: {
    type: String,
    required: true,
  },
  midterm: {
    type: String,
    required: true,
  },
  homeworkAssignmentsDesc: {
    type: String,
    required: true,
  },
  quizzesDesc: {
    type: String,
    required: true,
  },
  laboratoryDesc: {
    type: String,
    required: true,
  },
  midtermDesc: {
    type: String,
    required: true,
  },
  lateSubmission: {
    type: String,
    required: true,
  },
  lockerNum: {
    type: String,
    required: true,
  },
  electronicDevices: {
    type: String,
    required: true,
  },
  clickers: {
    type: String,
    required: true,
  },
});

module.exports = Memory = mongoose.model("courseOutline", CourseOutlineSchema);
