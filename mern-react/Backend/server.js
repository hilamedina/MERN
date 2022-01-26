const express = require('express');
const cors = require('cors');
const mongoose = require;

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
// create express server.

// const DB =
//   'mongodb+srv://tutorial-api:8gCtQitnNigtzFzJ@databaseproject.nwjez.mongodb.net/tutorialApiDB?retryWrites=true&w=majority';
app.use(cors());
app.use(express.json());
//middle were.

app.listen(port, () => {
  console.log(`server is runing on port : ${port}`);
});
//start the server

//mongodb+srv://HilaDb:<password>@databaseproject.nwjez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
