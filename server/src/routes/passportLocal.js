const router = require("express").Router();
// JWT
const jwt = require("jsonwebtoken");
// fs - file system module
const fs = require("fs");
// dotenv
const dotenv = require("dotenv");
dotenv.config();
// fakeLocalStorage
const fakeLocalStorage = require("./../../fakeLocalStorage.json");

// db setup (will need to change for deployment)
const pool = require("./../../db/dbconfig.js");

// client URL for development (will need to change for deployment)
const CLIENT_URL = "http://localhost:3000/";

//env variables
const JWT_TOP_SECRET_KEY = process.env.JWT_TOP_SECRET_KEY;

module.exports = router;
