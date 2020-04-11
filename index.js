const express = require("express");
const app = express();

// setting environment file
const dotenv = require('dotenv');
dotenv.config()

// cross origin resource sharing
const cors = require("cors");
app.use(cors());

// parsing the json data
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// see the requests and responses
const morgan = require("morgan");
app.use(morgan("dev"));

// setting database connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/offer-facebook', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
    if(err) console.log(err);
    console.log(`Database: offer-facebook`);
});

//middlewares
const {emailExistInRegistration} = require("./api/middlewares/EmailExistInRegistration");

// routes
const AccountRouter = require("./api/routes/Accounts");
app.use("/user/accounts", emailExistInRegistration, AccountRouter);

app.use((req, res) => {
  res.status(404).json({ msg: "404 API not found!" });
});

// server configuration
const http = require("http");
const PORT = process.env.PORT || 4000;

http.createServer(app).listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(`Server: ${PORT}`);
});
 