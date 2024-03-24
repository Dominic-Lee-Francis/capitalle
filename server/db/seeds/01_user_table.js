/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { username: "user1", password: "password1", streak: 0, best: 0 },
    { username: "user2", password: "password2", streak: 0, best: 0 },
    { username: "user3", password: "password3", streak: 0, best: 0 },
  ]);
};