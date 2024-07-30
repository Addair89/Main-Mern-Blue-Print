const mongoose = require("mongoose");

const flashCardSchema = new mongoose.Schema({
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
});

const FlashCard = mongoose.model("FlashCard", flashCardSchema);

module.exports = FlashCard;
