// importing
const mongoose = require("mongoose");

// creating blackListSchema
const blackListSchema = new mongoose.Schema(
  {
    blackListToken: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

// creating BlackListModel
const BlackListModel = mongoose.model("BlackListToken", blackListSchema);

// exporting BlackListModel
module.exports = { BlackListModel };
