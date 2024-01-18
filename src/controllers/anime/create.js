const createAnime = async (req, res) => {
    const {
        db: { Anime },
        body: { animeId, userId, timestamp }
    } = req;

    const anime = await Anime.create(animeId, userId, timestamp);

    res.send(anime);
    
}

module.exports = createAnime;