// importing
const { UserModel } = require("../models/userModel");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BlackListModel } = require("../models/blackistModel");

// register User
const registerUser = async (req, res) => {
  const { username, email, password, GeoJSONData } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ msg: "Email is already in use" });
    }
    bcrypt.hash(password, 8, async (err, hash) => {
      if (err) {
        res.send({ error: err });
      } else {
        const user = new UserModel({
          username,
          email,
          password: hash,
          GeoJSONData,
        });
        await user.save();
        res.status(201).send({ message: "User created successfully!" });
      }
    });
  } catch (error) {
    console.log(`Error at registration ${error}`);
    res.status(500).send({ error: `Error at registration ${error}` });
  }
};

// login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        const token = jwt.sign({ userId: user._id }, "nishant", {
          expiresIn: "1d",
        });
        res.send({ msg: "Login successful", token: token, userId: user._id });
      } else {
        res.send({ msg: err });
      }
    });
  } catch (error) {
    console.log(`Error at Login ${error}`);
    res.send({ msg: `Error at Login ${error}` });
  }
};

// logout User
const logoutUser = async (req, res) => {
  const blackListToken = req.headers.authorization?.split(" ")[1];
  try {
    const Token = await BlackListModel.findOne({ blackListToken });
    if (Token) {
      return res
        .status(403)
        .json({ msg: "You are already logged out. Login again" });
    } else {
      const blacklist = new BlackListModel({ blackListToken });
      await blacklist.save();
      return res.status(200).send({ msg: "User logout successfully" });
    }
  } catch (error) {
    return res.status(500).send({ msg: "internal server error", error: error });
  }
};

// save geoJSONData
const saveData = async (req, res) => {
  const { userId } = req.params;
  const { GeoJSONData } = req.body;

  try {
    const user = await UserModel.findByIdAndUpdate(
      userId,
      { $push: { GeoJSONData: GeoJSONData } },
      { new: true }
    );
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "GeoJSON data saved successfully", user });
  } catch (error) {
    console.error("Error saving GeoJSON data:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

// exporting controller
module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  saveData,
};
