 //import section
 require("dotenv").config();
 const express = require("express");
 const app = express();
 const mongoose = require("mongoose");
 const morgan = require("morgan");
 const helmet = require("helmet");
 const compression = require("compression");


 //DB connection
 mongoose.connect(process.env.MONGO_URI);
 mongoose.connection.on("connected", () => {
     console.log("DB connected");
 });
 mongoose.connection.on("error", (err) => {
     console.log("mongodb failed with", err);
 });



 //middleware
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 app.use(morgan("dev"));
 app.use(helmet());
 app.use(compression());


 //server listening
 const port = 8000;

 app.listen(port, () => {
     console.log(`Example app listening on port ${port}`);
 });