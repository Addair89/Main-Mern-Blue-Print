// Connect to the database
require("dotenv").config();
require("./config/database");

// Require the Mongoose models
const User = require("./models/user");
const Question = require("./models/question");
const Quiz = require("./models/quiz");
const FlashCard = require("./models/flashCard");
