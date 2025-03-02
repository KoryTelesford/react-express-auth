const express = require('express');
const userController = require('./controllers/user/index'); // the "/index" part of the path is technically not required here, by default, when provided with a folder, the index file will be imported
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');
const animeController = require('./controllers/anime/index'); // to get all my anime methods from the barrel

const Router = express.Router();
Router.use(addModelsToRequest);

//users routes
Router.get('/users', userController.list);
Router.post('/users', userController.create);
Router.get('/users/:id', userController.show);
Router.delete('/users/:id', userController.remove);

//log-in routes
Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);
Router.get('/me', userController.showMe);

//anime routes
Router.get('/users/:user_id/animes', animeController.list)
Router.post('/users/:user_id/animes', animeController.create)
Router.patch('/users/:user_id/animes/:anime_id/:id', animeController.update)
Router.delete('/users/:user_id/animes/:anime_id', animeController.remove)

// These actions require authentication (only valid logged in users can do these things)
// The checkAuthentication middleware will only run for these specified routes.
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

module.exports = Router;
