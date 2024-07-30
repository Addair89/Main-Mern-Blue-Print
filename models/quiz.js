const mongoose = require("mongoose");
const Question = require("./question");

const quizSchema = new mongoose.Schema({
  category: { type: String, required: true },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  questions: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Question", required: true },
  ],
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
