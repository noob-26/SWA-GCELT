const express = require("express");
const path = require("path");
const app = express();
require("dotenv/config");
const cors = require("cors");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({limit: "50mb"}));
app.use(
  express.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000})
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//Connecting DB
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true, useUnifiedTopology: true},
  () => {
    console.log("DB Connected!!");
  }
);

//Routes
app.use("/", require("./routes/route"));
app.use("/", require("./routes/signup"));
app.use("/", require("./routes/login"));

//Starting Server
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});