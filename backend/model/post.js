const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
  StudentName: {
    type: String,
    required: true,
  },
  StudentId: {
    type: Number,
    required: true,
  },
  sem: {
    type: Number,
    required: true,
  },
  ProfName: {
    type: String,
    required: true,
  },
  BRANCH: {
    type: String,
    required: true,
  },
  division: {
    type: Number,
    required: true,
  },
  ProfSubject: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  ProfReview: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  courseReview: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});
module.exports = mongoose.model("post", postSchema);
