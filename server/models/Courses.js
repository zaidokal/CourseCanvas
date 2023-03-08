const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = Course = mongoose.model("course", courseSchema);
