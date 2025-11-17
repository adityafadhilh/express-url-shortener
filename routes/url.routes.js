const express = require('express');
const Router = express.Router();
const urlController = require('../controllers/url.controllers');

Router.get('/', urlController.getAllUrl);

Router.get('/:shortenUrl', urlController.getUrl);

Router.post('/', urlController.createShortenUrl);

Router.delete('/:url', urlController.deleteUrl);

module.exports = Router;