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
  profession: {
    type: String,
    required: true,
  },
  stream: {
    type: String,
    required: true,
  },
  batch_year: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: Buffer,
  },
  profilePictureType: {
    type: String,
  },
});

StudentSchema.virtual("profilePicturePath").get(function () {
  if (this.profilePicture != null && this.profilePictureType != null) {
    return `data:${
      this.profilePictureType
    };charset=utf-8;base64,${this.profilePicture.toString("base64")}`;
  }
});

module.exports = mongoose.model("Student", StudentSchema);
