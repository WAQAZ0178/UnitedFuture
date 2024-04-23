const mongoose = require("mongoose");
const Notes = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users", // Assuming you have a User model
      required: true,
    },
    title: {
      type: String,
      require: true,
      min: 5,
      max: 50,
    },
    description: {
      type: String,
      require: true,
      min: 15,
      max: 300,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("notes", Notes);
