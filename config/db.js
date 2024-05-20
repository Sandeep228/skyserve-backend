// importing
const mongoose = require("mongoose");
require("dotenv").config();

// establishing connection
const connection = mongoose.connect(process.env.mongoURL);

// exporting connection
module.exports = { connection };
