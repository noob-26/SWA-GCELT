const express = require("express");
const bcrypt = require("bcrypt");
const Student = require("../models/Student");
const router = express.Router();

const imageTypes = ["image/jpeg", "image/png", "image/gif"];

router.post("/signup", async (req, res) => {
  try {
    const student = await Student.findOne({email: req.body.email});
    if (student) {
      res.send("User already exists");
    }
    const hashedPwd = await bcrypt.hash(req.body.password, 10);

    const newStudent = new Student({
      name: req.body.name,
      email: req.body.email,
      mobile_number: req.body.mobile_number,
      profession: req.body.profession,
      stream: req.body.stream,
      batch_year: req.body.batch_year,
      password: hashedPwd,
    });

    //Checking image to be uploaded
    saveFiletoDatabase(newStudent, req.body.profile_picture);
    await newStudent.save();

    res.redirect("/login_page");
  } catch (err) {
    console.log(err);
  }
});

function saveFiletoDatabase(student, content) {
  if (content === null || content === "") return;

  const data = JSON.parse(content);
  if (data === null || imageTypes.includes(data.type) === false) return;

  student.profilePicture = new Buffer.from(data.data, "base64");
  student.profilePictureType = data.type;
}

module.exports = {
  router,
};
