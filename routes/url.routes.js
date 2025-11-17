const express = require('express');
const Router = express.Router();
const urlController = require('../controllers/url.controllers');

Router.get('/:shortenUrl', urlController.getUrl);

Router.post('/', urlController.createShortenUrl);

module.exports = Router;