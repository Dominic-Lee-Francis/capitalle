// Modules
// express - web framework for Node.js
const express = require("express");
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
// token routes
const tokenRoutes = require("./src/routes/token.js");
// cookie parser
const cookieParser = require("cookie-parser");
// cookie session
const cookieSession = require("cookie-session");
// Server setup
const app = express();

//dotenv
const dotenv = require("dotenv");
dotenv.config();
const EXPRESS_SESSION_SECRET_KEY = process.env.EXPRESS_SESSION_SECRET_KEY;

// Middleware
app.use(express.json()); // parse json data req.body
// cookie parser middleware
app.use(cookieParser());
// cookie session middleware
app.use(
  cookieSession({
    name: "user_session",
    keys: [EXPRESS_SESSION_SECRET_KEY],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// flash middleware
app.use(flash());

// send user data to the views
app.use(express.urlencoded({ extended: false }));

// passport-setup - configuration from passport.js Google OAuth & Github OAuth strategies
const passportSetup = require("./passport");

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Cors is used for enabling CORS with various options such as origin, methods, credentials
app.use(
  cors({
    origin: "https://capitalle.netlify.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ROUTES //
// Auth routes
app.use("/auth", authRoutes);

// Capital routes
app.use("/capital", capitalRoutes);

// Token routes
app.use("/api", tokenRoutes);

// Server setup
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
