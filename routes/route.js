//ROUTES
const express = require("express");
const router = express.Router();

//Routes
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/event", (req, res) => {
  res.render("event");
});

router.get("/union_members", (req, res) => {
  res.render("union_members");
});

router.get("/gallery", (req, res) => {
  res.render("gallery");
});

router.get("/student_id", (req, res) => {
  res.render("student_id");
});

router.get("/gcelt", (req, res) => {
  res.render("gcelt");
});

router.get("/rc-gcelt", (req, res) => {
  res.render("rc-gcelt");
});

router.get("/gallery_batch", (req, res) => {
  res.render("gallery_batch");
});

router.get("/gallery_program", (req, res) => {
  res.render("gallery_program");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/register_page", (req, res) => {
  res.render("register_page");
});

router.get("/login_page", (req, res) => {
  res.render("login_page");
});

module.exports = {
  router,
};
