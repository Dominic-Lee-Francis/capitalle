// Modules
// express - web framework for Node.js
const express = require("express");
// express-session - session middleware for Express
const session = require("express-session");
// uuid - simple, fast generation of RFC4122 UUIDS
const { v4: uuidv4 } = require("uuid");
// FileStore - file store for Express session
const FileStore = require("session-file-store")(session);
// path - module for working with file paths _______ REMOVE MAYBE
const path = require("path");
// body-parser - middleware for parsing JSON and urlencoded data REMOVE MAYBE
const bodyParser = require("body-parser");
// flash - flash messages for Express
const flash = require("express-flash");
// passport - authentication middleware for Node.js
const passport = require("passport");
// cors - middleware for enabling CORS with various options
const cors = require("cors");
// auth routes
const authRoutes = require("./src/routes/auth.js");
// capital routes
const capitalRoutes = require("./src/routes/capital.js");
// Token routes
// const tokenRoutes = require("./token.js");
// Passport Local routes
// const passportLocalRoutes = require("./src/routes/passportLocal.js");
// Server setup
const app = express();

// db setup (will need to change for deployment)
const pool = require("./db/dbconfig.js");

//dotenv
const dotenv = require("dotenv");
dotenv.config();
const EXPRESS_SESSION_SECRET_KEY = process.env.EXPRESS_SESSION_SECRET_KEY;

// Fake User Data for testing
// const users = [
//   { id: 1, username: "bob", email: "bob@bob", password: "password" },
// ];

// Middleware
app.use(express.json()); // parse json data req.body
// express-session middleware
app.use(
  session({
    genid: (req) => {
      return uuidv4(); // use UUIDs for session IDs
    },
    secret: EXPRESS_SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 10000 },
  })
);

// Session Testing Route
app.get("/session", (req, res) => {
  console.log("get / req.sessionID: ", req.session);
  console.log("req.session.user: ", req.session.user);
  req.session.user = users[0];
  console.log("req.session ", req.session);
  res.send(`Session ID: ${req.sessionID}`);
});

// flash middleware
app.use(flash());

// send user data to the views
app.use(express.urlencoded({ extended: false }));

// passport-setup - configuration from passport.js
const passportSetup = require("./passport");

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log("serializeUser user: ", user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log("deserializeUser user: ", user);
  done(null, user);
});

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

// Passport Local routes
// app.use("/passportLocal", passportLocalRoutes);

// Capital routes
app.use("/capital", capitalRoutes);

// Token routes
// app.use("/token", tokenRoutes);

// Server setup
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
