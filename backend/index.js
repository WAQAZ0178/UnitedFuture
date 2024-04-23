const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const app = express();

dotenv.config();
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());

// todo============== connection databse with mongoose =================
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo db database connected");
  })
  .catch((error) => {
    console.log(error);
  });

// todo============== check =================
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// todo============== add auth router  =================
app.use("/api/auth", authRouter);

app.listen(8000, () => {
  console.log("app is runinng he");
});
