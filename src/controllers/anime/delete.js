const deleteAnime = async (req, res) => {
    const {
        db: { Anime },
        params: { user_id, anime_id }
    } = req

    const existingAnime = await Anime.find(user_id, anime_id);
    if (!existingAnime) return res.status(404).json({error: 'Anime not found'});

    const deletedAnime = await Anime.delete(user_id, anime_id)
    deletedAnime ? res.sendStatus(204)  : res.sendStatus(500)
                // successfully deleted   // could not delete anime

};

module.exports = deleteAnime; 
