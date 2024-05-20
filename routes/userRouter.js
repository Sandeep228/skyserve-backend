// importing
const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  saveData,
} = require("../controllers/userController");
const { auth } = require("../middlewares/auth.middleware");
userRouter = express.Router();

// routes
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
userRouter.patch("/saveGeoJSON/:userId", auth, saveData);

// exporting routers
module.exports = { userRouter };
