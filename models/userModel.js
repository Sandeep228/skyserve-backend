// importing
const mongoose = require("mongoose");

// creating userSchema
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    GeoJSONData: [],
  },
  { versionKey: false }
);

// creating userModel
const UserModel = mongoose.model("user", userSchema);

// exporting UserModel
module.exports = { UserModel };
