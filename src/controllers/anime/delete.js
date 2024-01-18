const deleteAnime = async (req, res) => {
    const {
        db: { Anime },
        body: { anime_id },
        params: { id },
    } = req

    const anime = await Anime.find(id);
    if (!anime) return res.sendStatus(404);

    const deletedAnime = await anime.delete(anime_id)
    deletedAnime ? res.sendStatus(204)  : res.sendStatus(500)
                // successfully deleted   // could not delete anime

};

module.exports = deleteAnime; 
