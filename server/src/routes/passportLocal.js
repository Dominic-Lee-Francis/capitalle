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

// Passport
const passport = require("passport");

// Passport Local Strategy
const LocalStrategy = require("passport-local").Strategy;

// Passport Local Strategy
passport.use(
  new LocalStrategy(async (username, password, done) => {
    // successful login because the 2nd parm is a user object
    return done(null, { username: "bob", password: "password" });
  })
);

router.post("/login", async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (!user) {
      return res.status(400).json({ errors: "Invalid username or password" });
    }

    if (user) {
      res.redirect(CLIENT_URL);
    }
  })(req, res, next);
});

module.exports = router;
