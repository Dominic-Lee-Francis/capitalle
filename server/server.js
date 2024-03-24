const express = require("express");
const knex = require("./db/db");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  try {
    const users = await knex("users").select("*");
    res.json(users);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
