// Modules
const express = require("express");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const passport = require("passport");
const cors = require("cors");
const authRoutes = require("./src/routes/auth.js");
// Server setup
const app = express();

// Middleware
app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Cors
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Auth routes
app.use("/auth", authRoutes);

// Server setup
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
