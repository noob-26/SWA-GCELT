const express = require("express");
const path = require("path");
const app = express();
require("dotenv/config");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./routes/route").router;
const signupRouter = require("./routes/signup").router;
const loginRouter = require("./routes/login").router;
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
// mongoose.connect(
//   process.env.MONGO_URI,
//   {useNewUrlParser: true, useUnifiedTopology: true},
//   () => {
//     console.log("DB Connected!!");
//   }
// );

//Routes
app.use("/", routes);
app.use("/", signupRouter);
app.use("/", loginRouter);

//Starting Server
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
