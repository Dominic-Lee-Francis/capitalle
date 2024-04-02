// Modules
// express - web framework for Node.js
const express = require("express");
// cookie-session - cookie middleware for Express
const cookieSession = require("cookie-session");
// express-session - session middleware for Express
const session = require("express-session");
// pg session
const pgSession = require("connect-pg-simple")(session);
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
const passportLocalRoutes = require("./src/routes/passportLocal.js");
// Server setup
const app = express();

// db setup (will need to change for deployment)
const pool = require("./db/dbconfig.js");

// Middleware
app.use(express.json()); // parse json data req.body
// express-session middleware
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

// flash middleware
app.use(flash());
// cookie-session middleware
// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["key1"],
//     maxAge: 24 * 60 * 60 * 1000,
//   })
// );
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

// Passport Local routes
app.use("/passportLocal", passportLocalRoutes);

// Capital routes
app.use("/capital", capitalRoutes);

// Token routes
// app.use("/token", tokenRoutes);

// Server setup
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
