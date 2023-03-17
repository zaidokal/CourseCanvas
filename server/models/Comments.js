const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  outline_id: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Memory = mongoose.model("comment", CommentsSchema);
