const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add ur name"],
    },
    email: {
      type: String,
      required: [true, "Please add ur email"],
    },
    phone: {
      type: String,
      required: [true, "Please add ur phone"],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
