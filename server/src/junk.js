// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await knex("users").select("*");
//     res.json(users);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// app.post("/api/users", async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const newUser = await knex("users")
//       .insert({ username, password })
//       .returning("*");
//     res.json(newUser);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// {
//   usernameField: 'email',
//   passwordField: 'password',
//   passReqToCallback: true,
// },
// async (req, email, password, done) => {
//   const user = await knex("users").where({ email }).first();
//   if (!user) {
//     return done(null, false, { message: "Incorrect email." });
//   }
//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     return done(null, false, { message: "Incorrect password." });
//   }
//   return done(null, user);
// }

// passport.use(
//   "local-login",
//   new LocalStrategy(async (username, password, done) => {
//     try {
//       let users = await knex("users").where({ username: username });
//       if (users.length === 0) {
//         return done(null, false, { message: "Incorrect username." });
//       }
//       let user = users[0];
//       let result = await bcrypt.checkPassword(password, user.password);
//       if (result) {
//         return done(null, user);
//       } else {
//         return done(null, false, { message: "Incorrect password." });
//       }
//     } catch (error) {
//       return done(error);
//     }
//   })
// );

// passport.use(
//   "local-signup",
//   new LocalStrategy(async (username, password, done) => {
//     try {
//       let users = await knex("users").where({ username: username });
//       if (users.length > 0) {
//         return done(null, false, { message: "Username already exists." });
//       }
//       let hash = await bcrypt.hashPassword(password);
//       let newUser = { username, password: hash };
//       let userID = await knex("users").insert(newUser).returning("*");
//       newUser.id = userID;
//       return done(null, newUser);
//     } catch (error) {
//       done(error);
//     }
//   })
// );
