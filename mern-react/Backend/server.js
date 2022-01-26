const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
// create express server.

// const DB =
//   'mongodb+srv://tutorial-api:8gCtQitnNigtzFzJ@databaseproject.nwjez.mongodb.net/tutorialApiDB?retryWrites=true&w=majority';
app.use(cors());
app.use(express.json());
//middle were.

const uri = process.env.ATLAS_URI;
mongoose.connect(
  uri,
  () => {
    console.log('mongoDB connected');
  },
  (e) => console.error(e)
);

const exercisesRouter = require('./exercisesRouter');
const userRouter = require('./route/users');
const exercise = require('./models/exercise .model');

app.use('./exercises', exercisesRouter);
//when someonne go to /exercises it will load evrything in exercisesRouter
app.use('./users', usersRouter);

app.listen(port, () => {
  console.log(`server is runing on port : ${port}`);
});
//start the server

//mongodb+srv://HilaDb:<password>@databaseproject.nwjez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
