/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary(); // auto-incrementing id + primary key
    table.string("google_id").unique(); // google id
    table.string("username").notNullable().unique(); // unique username
    table.string("email").unique(); // unique email
    table.string("password").notNullable(); // password
    table.integer("streak").defaultTo(0); // a users streak od consecutive correct answers
    table.integer("best").defaultTo(0); // a users best streak of consecutive correct answers
    table.timestamp("created_at").defaultTo(knex.fn.now()); // created_at timestamp
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users"); // drop the users table
};
