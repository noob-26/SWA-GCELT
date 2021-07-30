const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Student = require("../models/Student");

router.post("/login", async (req, res) => {
  try {
    const student = await Student.findOne({email: req.body.email});
    if (student) {
      const cmp = await bcrypt.compare(req.body.password, student.password);
      if (cmp) {
        currentUser = student.name.split(" ")[0];
        console.log(currentUser);
        //res.send("Auth Successful");
        res.render("dashboard", {
          name: student.name,
          email: student.email,
          phone: student.mobile_number,
          stream: student.stream,
          batch: student.batch_year,
          profession: student.profession,
        });
      } else {
        res.send("Wrong email or password.");
      }
    } else {
      res.send("Wrong email or password.");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  router,
};
