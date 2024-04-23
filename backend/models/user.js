const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 5,
      max: 13,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", User);
