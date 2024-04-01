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
      const account = {
        google_id: profile.id,
        username: profile.displayName,
        email:
          profile.emails && profile.emails.length > 0
            ? profile.emails[0].value
            : "",
        password: "",
      };

      pool.query(
        `SELECT * FROM users WHERE google_id = $1`,
        [account.google_id],
        (err, results) => {
          if (err) {
            throw err;
          }
          if (results.rows.length > 0) {
            done(null, account);
          } else {
            pool.query(
              `INSERT INTO users (google_id, username, password) VALUES ($1, $2, $3) RETURNING *`,
              [account.google_id, account.username, account.password],
              (err, results) => {
                if (err) {
                  throw err;
                }
                done(null, account);
              }
            );
          }
        }
      );
      console.log(account);
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
      const account = {
        github_id: profile.id,
        username: profile.username,
        email: profile.emails ? profile.emails[0].value : "",
        password: "",
      };
      console.log(account);
      pool.query(
        `SELECT * FROM users WHERE github_id = $1`,
        [account.github_id],
        (err, results) => {
          if (err) {
            throw err;
          }
          if (results.rows.length > 0) {
            done(null, account);
          } else {
            pool.query(
              `INSERT INTO users (github_id, username, password) VALUES ($1, $2, $3) RETURNING *`,
              [account.github_id, account.username, account.password],
              (err, results) => {
                if (err) {
                  throw err;
                }
                done(null, account);
              }
            );
          }
        }
      );
    }
  )
);

// LOCAL LOGIN STRATEGY //
passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    (username, password, done) => {
      pool.query(
        `SELECT * FROM users WHERE username = $1`,
        [username],
        (err, results) => {
          if (err) {
            throw err;
          }
          if (results.rows.length > 0) {
            const user = results.rows[0];
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) {
                throw err;
              }
              if (isMatch) {
                done(null, user);
              } else {
                done(null, false);
              }
            });
          } else {
            done(null, false);
          }
        }
      );
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
