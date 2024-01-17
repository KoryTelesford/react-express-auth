/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('anime', (table) => {
    table.increments();  // makes the id sequence for our table
    table.string('title').notNullable(); // anime title in string 
    table.text('synopsis'); // description of anime in text
    table.integer('episodes'); // number of episodes in integer
    table.boolean('is_airing').defaultTo(false) // a boolean value to know if the anime is airing or not
    table.timestamps(true, true); // to know when our values in the columns get updated
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('anime') // this will delete our anime table 
}; 
