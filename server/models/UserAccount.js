const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
  },
});

module.exports = Memory = mongoose.model("account", AccountSchema);
