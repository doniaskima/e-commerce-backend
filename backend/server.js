//import section
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const ErrorHandler = require("./middlewares/error");

//DB connection
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("connected", () => {
    console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
    console.log("mongodb failed with", err);
});

//import routes
const routerProduct = require("./routes/ProductRoute");
const cartRoute = require("./routes/Cartroute");
const userRoute = require("./routes/UserRoute")

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//  routes middlewares

app.use("/api", routerProduct);
app.use("/api", cartRoute);
app.use("/api/users", userRoute);
app.use(ErrorHandler);

//server listening
const port = 5000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});