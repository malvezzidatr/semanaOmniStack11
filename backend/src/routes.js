const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');
const { request } = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongController');
const incidentController = require ('./controllers/incidentController');
const profileController = require ('./controllers/profileController');
const SessionController = require ('./controllers/SessionController');


routes.post('/sessions', SessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);

routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;