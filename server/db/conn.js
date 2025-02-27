// require('dotenv').config();

const mongoose = require("mongoose");

const db = process.env.DATABASE;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log("Connection start")).catch((error)=> console.log(error.message));