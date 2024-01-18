/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('anime_seen').del() // to first delete ALL data in the table before putting data


  await knex.table('anime_seen').insert([
    {anime_id: 1, user_id: 6, date_added: knex.fn.now()},
  ]);
};
