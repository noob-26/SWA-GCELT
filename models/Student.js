const mongoose = require("mongoose");

//Data model for student
const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  mobile_number: {
    type: String,
    required: true,
  },
  stream: {
    type: String,
    required: true,
  },
  passing_year: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    default: "",
  },
});
module.exports = mongoose.model("Student", StudentSchema);