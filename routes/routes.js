const route = require('express').Router()
var jsonLoader = require('../models/jsonLoader')
route.get('/test', (req, res) => {
    res.send('Hello World');
});
route.get('/load', (req, res) => {
    var _object = new jsonLoader
    _object.load()

    // jsonLoader.load()
});

module.exports = route;