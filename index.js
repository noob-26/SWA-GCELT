const express = require("express");
const path = require("path");
const app = express();
require("dotenv/config");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Student = require("./models/Student");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("DB Connected!!");
})

//ROUTES
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/event", (req, res) => {
  res.render("event");
});

app.get("/union_members", (req, res) => {
  res.render("union_members");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.get("/student_id", (req, res) => {
  res.render("student_id");
});

app.get("/gcelt", (req, res) => {
  res.render("gcelt");
});

app.get("/rc-gcelt", (req, res) => {
  res.render("rc-gcelt");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/register_page", (req, res) => {
  res.render("register_page");
});

app.get("/login_page", (req, res) => {
  res.render("login_page");
});

app.post("/signup", async (req, res) => {
   
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, 10);
    const newStudent = await Student.create({
      name: req.body.name,
      email: req.body.email,
      mobile_number: req.body.mobile_number,
      stream: req.body.stream,
      passing_year: req.body.passing_year,
      password: hashedPwd,
      message: req.body.message,
    });
    console.log(newStudent);
    res.send(newStudent);
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const student = await Student.findOne({ email: req.body.email });
    console.log(student);
    if (student) {
      const cmp = await bcrypt.compare(req.body.password, student.password);
      if (cmp) {
        res.send("Auth Successful"); 
       
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

app.listen(PORT, () => {
  console.log("runnnnninnngggg");
});