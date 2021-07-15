const express = require("express")
const app = express();

var http = require('http'),
    fs = require('fs');

app.get("/home", (req, res)=>{
    res.send("heyyyy");
});    

app.listen(3005, ()=>{
    console.log("runnnnninnngggg");
});