const listAnimes = async (req, res) => {
    const {
        db: { Anime } // this req.db.Anime property is put by the addModelsToRequest middleware
    } = req;

    const animes = await Anime.list();
    res.send(animes)
}

module.exports = listAnimes;