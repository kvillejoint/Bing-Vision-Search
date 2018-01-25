'use strict';

//DEPENDENCIES

const express = require ("express");
const bodyParser = require("body-parser");
const path = require("path");
//const expressLayouts = require("express-ejs-layouts");
const router = require("./app/routes");
const async = require("async");

// EXPRESS CONFIG - Creates new instance of express app
const app = express();

// Sets initial port for use in listener
var PORT = process.env.PORT || 8080;

// route our app
app.set("port", (process.env.PORT || 8080));
app.use("/", router);

// set directory for static files
app.use(express.static(__dirname + "/public"));

// BodyParser setup for data interpretation by server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Get request to serve app on main endpoint
app.get("/", function (req, res) {
    res.status(200).send("Hello from Visual Search App!");
    console.log("Communication to server is successful. Get route for '/' endpoint was hit");
});

// =========================================
// LISTENER to start server
// =========================================
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
    console.log("Press Ctrl+C to quit");
});