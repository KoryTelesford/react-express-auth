const User = require('../db/models/user');
const Anime = require('../db/models/anime');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Anime, // we are adding our Anime instance methods into the request body, making it accessible to route handlers
  };
  next();
};

module.exports = addModelsToRequest;
