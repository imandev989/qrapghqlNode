const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  teacher: { type: mongoose.Types.ObjectId, ref: "Teacher", required: true },
});

const model = mongoose.model("Course", schema);

module.exports = model;
