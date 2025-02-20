const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  courses: {
    type: [mongoose.Types.ObjectId],
    ref: "Course",
  },
});

const model = mongoose.model("Teacher", schema);

module.exports = model;
