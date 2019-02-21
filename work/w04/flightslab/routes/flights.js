var Router = require('express').Router(),
flightsController = require('../controllers/flights')


Router.get('/',flightsController.index)
Router.get('/flights/new', flightsController.new)
Router.post('/new', flightsController.create)
Router.put('/:id', flightsController.update)

module.exports = Router;
