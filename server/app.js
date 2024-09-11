require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const crud = require("./models/schema.js");
const cors = require("cors");
const router = require("./routes/router.js");

// Correct path to conn.js
require("./db/conn.js");  // Use .js if conn is a standard JS file

const port = 8003; 

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
