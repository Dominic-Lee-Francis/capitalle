const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const passport = require("passport");
const bcrypt = require("bcrypt");

// db setup (will need to change for deployment)
const pool = require("./db/dbconfig.js");

// client URL for development (will need to change for deployment)
const CLIENT_URL = "http://localhost:3000/";

// Google OAuth Strategy
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      console;
    }
  )
);

// GITHUB OAUTH STRATEGY //
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

// LOCAL STRATEGY //

// Register
// passport.use(
//   "local-register",
//   new LocalStrategy(
//     {
//       usernameField: "username",
//       emailField: "email",
//       passwordField: "password",
//       passReqToCallback: true,
//     },
//     async (req, res) => {
//       try {
//         const { username, email, password } = req.body;
//         const newUser = await pool.query(
//           "INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING *",
//           [username, email, password]
//         );
//         // res.json(newUser);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }
//   )
// );

// Login
passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, res) => {
      try {
        const { username, password } = req.body;
        const user = await pool.query(
          "SELECT * FROM users WHERE username = $1 AND password = $2",
          [username, password]
        );
        // res.json(user);
      } catch (error) {
        console.error(error.message);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
