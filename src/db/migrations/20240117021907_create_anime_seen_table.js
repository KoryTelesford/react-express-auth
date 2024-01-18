/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('anime_seen', (table) => { // for the watchlist table, that the user has seen
    table.increments();  // makes the id sequence for our table
    table.integer('anime_id') // this is the anime id from our anime API that we are saving
    table.integer('user_id').references('id').inTable('users').notNullable(); // creates a foreign key referencing our id property in the user table
    table.timestamp('date_added').defaultTo(knex.fn.now());  // when the anime was added to the user's watch list

});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('anime_seen') // this will delete our anime table 
}; 
