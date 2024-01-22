const listAnimes = async (req, res) => {
    const {
        db: { Anime }, // this req.db.Anime property is put by the addModelsToRequest middleware
        params: { user_id }
    } = req;

    const animes = await Anime.list(user_id);
    res.send(animes)
}

module.exports = listAnimes;