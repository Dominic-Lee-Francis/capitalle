const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");

// db setup (will need to change for deployment)
const pool = require("../../db/dbconfig.js");

// client URL for development (will need to change for deployment)
const CLIENT_URL = "http://localhost:3000/";
const REGISTER_URL = "http://localhost:3000/register";

// REGISTER
router.post("/register", async (req, res) => {
  let { username, email, password, password2 } = req.body;

  console.log({
    username,
    email,
    password,
    password2,
  });

  let errors = [];

  // check required fields
  if (!username || !email || !password || !password2) {
    errors.push({ message: "Please enter all fields" });
  }
  // check if password is at least 6 characters long
  if (password.length < 6) {
    errors.push({ message: "Password must be at least 6 characters long" });
  }
  // check if passwords match
  if (password !== password2) {
    errors.push({ message: "Passwords do not match" });
  }
  // if error object has items - return errors
  if (errors.length > 0) {
    res.json({ errors });
  }
  // if no errors - insert user into db
  else {
    let hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    pool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email],
      (err, results) => {
        if (err) {
          throw err;
        }
        console.log(results.rows);
        if (results.rows.length > 0) {
          errors.push({ message: "Email is already registered" });
          res.json({ errors });
        }
      }
    );
    pool.query(
      `SELECT * FROM users WHERE username = $1`,
      [username],
      (err, results) => {
        if (err) {
          throw err;
        }
        console.log(results.rows);
        if (results.rows.length > 0) {
          errors.push({ message: "Username is already registered" });
          res.json({ errors });
        }
      }
    );
    pool.query(
      `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
      [username, email, hashedPassword],
      (err, results) => {
        if (err) {
          throw err;
        }
        console.log(results.rows);
        res.json(results.rows);
      }
    );
  }
});

// Login
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      // cookies: req.cookies,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "user failed to authenticate.",
    });
  }
});

// Login failed
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate.",
  });
});

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

// Google OAuth
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

// Github OAuth
router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

// Local Strategy
// Login
router.post(
  "/local-login",
  passport.authenticate("local-login", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

module.exports = router;
