const knex = require('../knex'); // so we can run knex methods so we can use SQL

class Anime {
    
    // make a instance method for finding anime by the user id 
    constructor({ id, anime_id, user_id, date_added }) { 
        this.id = id;
        this.anime_id = anime_id;
        this.user_id = user_id;
        this.date_added = date_added;
    }

    // static async list(user_id) {
    //     const query = 'SELECT * FROM anime_seen WHERE user_id = ?';
    //     const response = await knex.raw(query, [user_id]);
    //     return response.rows || [];
    // }

    static async list(user_id) {
        console.log('Querying animes for user ID:', user_id);
        const query = 'SELECT * FROM anime_seen WHERE user_id = ?';
        const response = await knex.raw(query, [user_id]);
        console.log('Animes query response:', response.rows);
        return response.rows || [];
    }

    static async create(anime_id, user_id, date_added) {
        const query = 'INSERT INTO anime_seen (anime_id, user_id, date_added) VALUES (?, ?, ?) RETURNING *';
        const args = [anime_id, user_id, date_added];
        const { rows } = await knex.raw(query, args)
        const anime = rows[0];
        return new Anime(anime);
    }

    // static async update(animeId, newAnimeId) {
    //     const query = 'UPDATE anime_seen SET anime_id = ? WHERE id = ?';
    //     const args = [newAnimeId, animeId];
    //     const { rows } = await knex.raw(query, args)
    //     const updatedAnime = rows[0];
    //     return new Anime(updatedAnime);
    // }

    static async delete(anime_id, user_id){
        const query = `DELETE FROM anime_seen WHERE user_id = ? AND anime_id = ? RETURNING *`;
        const { rows: [removedAnime] } = await knex.raw(query, [user_id, anime_id]);
        return removedAnime ? new Anime(removedAnime) : null;      // this is so that we can see that we deleted, an instance of that
    }

    static async find(anime_id, user_id){
        const query = 'SELECT * FROM anime_seen WHERE user_id = ? AND anime_id = ?';
        const args = [user_id, anime_id];
        const { rows } = await knex.raw(query, args);
        const anime = rows[0];
        return anime ? new Anime(anime) : null;
    }
};

module.exports = Anime;