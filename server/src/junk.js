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
