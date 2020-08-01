const route = require('express').Router()
route.get('/test', (req, res) => {
    res.send('Hello World');
});



module.exports = route;