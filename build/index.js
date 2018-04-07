"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
exports.APPLICATION_PORT = 3000;
app.listen(exports.APPLICATION_PORT, function () {
    console.log("Server is listening on port " + exports.APPLICATION_PORT);
});
