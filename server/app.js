const express = require("express"); ////npm install express --save
const logger = require("morgan"); //npm install morgan --save
const createError = require("http-errors"); //npm install http-errors --save
const cors = require("cors"); //npm install cors
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Martin:databaza@cluster0-xpiag.mongodb.net/test?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

const getRouter = require("./routes/get-data");
const changeRouter = require("./routes/change-data");

const app = express();

//CORS (aby sa React server vedel napojit na Express server)
app.use(cors());

app.use(logger("dev")); //logger
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/get-data", getRouter);
app.use("/change-data", changeRouter);

app.use((req, res, next) => {
  const err = createError(404);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err);
});

module.exports = app;
