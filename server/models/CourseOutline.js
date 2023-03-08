const mongoose = require("mongoose");

const CourseOutlineSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  year: {
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
  prerequisites: {
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
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  approved: {
    type: Boolean,
    default: false,
  },
  requestApproval: {
    type: Boolean,
    default: false,
  },
  decision: {
    type: String,
    default: "Not Requested",
  },
});

module.exports = Memory = mongoose.model("courseOutline", CourseOutlineSchema);
