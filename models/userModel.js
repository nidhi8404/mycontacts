const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add ur username"],
    },
    email: {
      type: String,
      required: [true, "Please add user email"],
      unique: [true, "Email already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add ur password"],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
