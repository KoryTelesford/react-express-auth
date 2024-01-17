/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('user_anime', (table) => {
    table.increments();  // makes the id sequence for our table
    table.integer('user_id').references('id').inTable('users').notNullable(); // creates a foreign key referencing our id property in the user table
    table.integer('anime_id').references('id').inTable('anime').notNullable(); // creates a foreign key referencing our id property in the anime table
    table.string('review') // the user can write their own comments on the anime
    table.integer('rating') // the user can rate the anime on a number scale
    table.timestamp('date_added').defaultTo(knex.fn.now());  // when the anime was added to the user's list

});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('user_anime'); // to drop our join table 
};
