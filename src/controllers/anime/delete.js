const deleteAnime = async (req, res) => {
    const {
        db: { Anime },
        params: { anime_id, user_id }
    } = req

    const existingAnime = await Anime.find(anime_id, user_id);
    if (!existingAnime) return res.status(404).json({error: 'Anime not found'});

    const deletedAnime = await Anime.delete(anime_id, user_id )
    deletedAnime ? res.status(204).json({ message: 'Successfully deleted anime entry.' }) : res.sendStatus(500)
                // successfully deleted                                               // could not delete anime

};

module.exports = deleteAnime; 
