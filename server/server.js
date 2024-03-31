// Modules
// express - web framework for Node.js
const express = require("express");
// cookie-session - cookie middleware for Express
const cookieSession = require("cookie-session");
// passport - authentication middleware for Node.js
const passport = require("passport");
// cors - middleware for enabling CORS with various options
const cors = require("cors");
// auth routes
const authRoutes = require("./src/routes/auth.js");
// capital routes
const capitalRoutes = require("./src/routes/capital.js");
// Server setup
const app = express();

// Middleware
app.use(express.json()); // parse json data req.body
// cookie-session middleware
app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
// send user data to the views
app.use(express.urlencoded({ extended: false }));

// passport-setup - configuration from passport.js
const passportSetup = require("./passport");

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Cors is used for enabling CORS with various options such as origin, methods, credentials
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ROUTES //
// Auth routes
app.use("/auth", authRoutes);

// Capital routes
app.use("/capital", capitalRoutes);

// Server setup
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
