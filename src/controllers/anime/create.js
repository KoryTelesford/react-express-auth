const createAnime = async (req, res) => {
    const {
        db: { Anime },
        body: { anime_id, user_id, date_added }
    } = req;

    const anime = await Anime.create(anime_id, user_id, date_added);

    res.send(anime);
    
}

module.exports = createAnime;