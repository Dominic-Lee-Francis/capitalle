const router = require("express").Router();
// fs - file system module
const fs = require("fs");
// dotenv
const dotenv = require("dotenv");
dotenv.config();
// bcrypt - password hashing
const bcrypt = require("bcrypt");

// db setup (will need to change for deployment)
const pool = require("./../../db/dbconfig.js");

// client URL for development (will need to change for deployment)
const CLIENT_URL = "http://localhost:3000/";
const FAILURE_URL = "http://localhost:3000/rules";

//env variables
const JWT_TOP_SECRET_KEY = process.env.JWT_TOP_SECRET_KEY;

// Passport
const passport = require("passport");

// Passport Local Strategy
const LocalStrategy = require("passport-local").Strategy;

// Passport Local Strategy
passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async (username, password, done) => {
      // successful login because the 2nd parm is a user object
      try {
        console.log("username: ", username);
        const user = await pool.query(
          "SELECT * FROM users WHERE username = $1",
          [username]
        );
        if (user.rows.length === 0) {
          return done(null, false, { message: "User not found" });
        }
        const validPassword = await bcrypt.compare(
          password,
          user.rows[0].password
        );
        if (!validPassword) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user.rows[0]);
      } catch (err) {
        return done(err);
      }
    }
  )
);

router.post(
  "/login",
  async (req, res, next) => {
    next();
  },
  (req, res) => {
    console.log("req.body part 2: ", req.body);
    passport.authenticate("login", {
      successRedirect: CLIENT_URL,
      failureRedirect: FAILURE_URL,
    });
  }
);

// module.exports = router;
