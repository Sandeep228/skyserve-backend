// importing
const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routes/userRouter");
const { UserModel } = require("./models/userModel");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);

app.get("/", async (req, res) => {
  res.status(200).send("This is out Homepage.");
});

// checking server connection
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to the mongoDB.");
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.log("Error in connecting to the database.", error);
  }
});
