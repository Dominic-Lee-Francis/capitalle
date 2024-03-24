/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.serial("id").primary(); // auto-incrementing id + primary key
    table.varchar("username", 255).notNullable().unique(); // unique username
    table.varchar("password", 255).notNullable(); // password
    table.timestamp("created_at").defaultTo(knex.fn.now()); // created_at timestamp
    table.integer("streak").defaultTo(0); // a users streak od consecutive correct answers
    table.integer("best").defaultTo(0); // a users best streak of consecutive correct answers
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users"); // drop the users table
};
