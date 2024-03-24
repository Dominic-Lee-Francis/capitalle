const express = require("express");
const app = express();

const knexfile = require("./db/knexfile").development;
const knex = require("knex")(knexfile);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
