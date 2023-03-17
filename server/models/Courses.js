const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = Course = mongoose.model("course", CourseSchema);
