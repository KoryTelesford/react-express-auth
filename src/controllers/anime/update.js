const updateAnime = async (req, res) => {
    const {
        db: { Anime },
        body: { animeId }, // the parameter put by the user
        params: { id },    // grabbing the actual id from the db
    } = req

    const anime = await Anime.find(id);
    if (!anime) return res.sendStatus(404);

    const updatedAnime = await anime.update(animeId);
    res.send(updatedAnime);

};

module.exports = updateAnime;