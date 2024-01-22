const updateAnime = async (req, res) => {
    const {
        db: { Anime },
        body: { new_anime_id }, // the parameter put by the user
        params: { anime_id, user_id },    // grabbing the actual IDs from the db
    } = req

    const anime = await Anime.find(anime_id, user_id);
    if (!anime) return res.sendStatus(404);

    const updatedAnime = await Anime.update(new_anime_id);
    res.send(updatedAnime);

};

module.exports = updateAnime;