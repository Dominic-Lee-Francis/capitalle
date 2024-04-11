// Modules
// express - web framework for Node.js
const express = require("express");
// flash - flash messages for Express
const flash = require("express-flash");
// passport - authentication middleware for Node.js
const passport = require("passport");
// bcrypt - password hashing function
const bcrypt = require("bcrypt");
// jwt - JSON Web Token implementation
const jwt = require("jsonwebtoken");
// cors - middleware for enabling CORS with various options
const cors = require("cors");
// auth routes
const authRoutes = require("./src/routes/auth.js");
// capital routes
const capitalRoutes = require("./src/routes/capital.js");
// cookie parser
const cookieParser = require("cookie-parser");
// cookie session
const cookieSession = require("cookie-session");
// Server setup
const app = express();

// db setup (will need to change for deployment)
const pool = require("./db/dbconfig.js");

//dotenv
const dotenv = require("dotenv");
dotenv.config();
const EXPRESS_SESSION_SECRET_KEY = process.env.EXPRESS_SESSION_SECRET_KEY;
const JWT_TOP_SECRET_ACCESS_KEY = process.env.JWT_TOP_SECRET_ACCESS_KEY;
const JWT_TOP_SECRET_REFRESH_KEY = process.env.JWT_TOP_SECRET_REFRESH_KEY;

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

// passport-setup - configuration from passport.js
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

let refreshTokens = [];

app.post("/api/refresh", (req, res) => {
  // Get the refresh token from the user
  const refreshToken = req.body.token;

  // Check if the refresh token is valid
  if (!refreshToken) return res.status(401).json("You are not authenticated");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid");
  }
  jwt.verify(refreshToken, JWT_TOP_SECRET_REFRESH_KEY, (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken({ username: user.username });
    const newRefreshToken = generateRefreshToken({ username: user.username });

    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
});

const generateAccessToken = (user) => {
  return jwt.sign(
    { username: user.username },
    process.env.JWT_TOP_SECRET_ACCESS_KEY,
    {
      expiresIn: "5m",
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { username: user.username },
    process.env.JWT_TOP_SECRET_REFRESH_KEY
  );
};

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  pool.query(
    "SELECT * FROM users WHERE username = $1",
    [username],
    (error, results) => {
      if (error) {
        throw error;
      }
      const user = results.rows[0];
      if (user) {
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            throw err;
          }
          if (isMatch) {
            // Generate JWT access token
            const accessToken = generateAccessToken(user);
            // Generate JWT refresh token
            const refreshToken = generateRefreshToken(user);
            refreshTokens.push(refreshToken);
            res.json({ username: user.username, accessToken, refreshToken });
          } else {
            res.status(401).send("Username or password incorrect!");
          }
        });
      }
    }
  );
});

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, JWT_TOP_SECRET_ACCESS_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Token is not valid" });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: "You failed to authenticate" });
  }
};

// LOGOUT
app.post("/api/logout", verifyJWT, (req, res) => {
  console.log("logout");
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.clearCookie("user_session");
  res.status(200).json("You logged out successfully");
});

app.get("/api/user/:id", verifyJWT, (req, res) => {
  const { id } = req.params;
  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.get("/api/users/me", verifyJWT, (req, res) => {
  res.status(200).json(req.user);
});

// Server setup
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
