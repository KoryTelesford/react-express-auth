const updateAnime = async (req, res) => {
    const {
        db: { Anime },
        body: {new_anime_id},
        params: {id, user_id, anime_id}
    } = req;

    console.log("ihff", id, anime_id, user_id )
    const animeExists = await Anime.findById(id, anime_id, user_id)
    if (!animeExists)  return res.sendStatus(404);

    const updatedAnimeId = await Anime.update(new_anime_id, id, user_id, anime_id);
    res.send(updatedAnimeId);
}

module.exports = updateAnime;