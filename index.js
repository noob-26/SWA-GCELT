const express = require("express")
const path = require("path")
const app = express();

var http = require('http'),
    fs = require('fs');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
 

app.get("/", (req, res)=>{
    res.render("index"); 
});  

app.get("/event", (req, res)=>{
    res.render("event"); 
}); 

  
app.get("/union_members", (req, res)=>{
    res.render("union_members"); 
}); 

app.get("/gallery", (req, res)=>{
    res.render("gallery"); 
}); 

app.get("/student_id", (req, res)=>{
    res.render("student_id"); 
}); 

app.get("/gcelt", (req, res)=>{
    res.render("gcelt"); 
}); 

app.get("/rc-gcelt", (req, res)=>{
    res.render("rc-gcelt"); 
}); 

app.get("/contact", (req, res)=>{
    res.render("contact"); 
}); 

app.listen(3005, ()=>{
    console.log("runnnnninnngggg");
});