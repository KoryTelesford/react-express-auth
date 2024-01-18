const deleteAnime = async (req, res) => {
    const {
        db: { Anime },
        body: { animeId },
        params: { id },
    } = req

    const anime = await Anime.find(id);
    if (!anime) return res.sendStatus(404);

    const deletedAnime = await anime.delete(animeId)
    deletedAnime ? res.sendStatus(204)  : res.sendStatus(500)
                // successfully deleted   // could not delete anime

};

module.exports = deleteAnime; 
