const knex = require('../knex'); // so we can run knex methods so we can use SQL

class Anime {
    
    // make a instance method for finding anime by the user id 
    constructor({ animeId, userId, timestamp }) { 
        this.id = animeId;
        this.userId = userId;
        this.timestamp = timestamp;
    }

    static async list() {
        const query = 'SELECT * FROM anime_seen';
        const response = await knex.raw(query);
        return response.rows || [];
    }

    static async create(animeId, userId, timestamp) {
        const query = 'INSERT INTO anime_seen (anime_id, user_id, date_added) VALUES (?, ?, ?) RETURNING *';
        const args = [animeId, userId, timestamp];
        const { rows } = await knex.raw(query, args)
        const anime = rows[0];
        return new Anime(anime);
    }

    static async update(animeId, newAnimeId) {
        const query = 'UPDATE anime_seen SET anime_id = ? WHERE id = ?';
        const args = [newAnimeId, animeId];
        const { rows } = await knex.raw(query, args)
        const updatedAnime = rows[0];
        return new Anime(updatedAnime);
    }

    static async delete(animeId){
        const query = `DELETE FROM anime_seen WHERE id = ? RETURNING *`;
        const { rows: [removedAnime] } = await knex.raw(query, [animeId]);
        return [removedAnime];
    }

    static async find(animeId){
        const query = 'SELECT * FROM anime_seen WHERE id = ?';
        const args = [animeId];
        const { rows } = await knex.raw(query, args);
        const user = rows[0];
        return user ? new Anime(user) : null;
    }
};

module.exports = Anime;