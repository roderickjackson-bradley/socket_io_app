const Router = require('express').Router(),
flightController = require('../controllers/flightsController')

// Displays index
Router.get('/', flightController.index)
// Displays new form
Router.get('/flights/new', flightController.new)

Router.post('/', flightController.create)

// // Form
// Router.get('/flights/new', flightController.new)
// Router.get('/:id', flightController.show)
// Router.post('/flights/new', flightController.create);



// router.post('/testing', flightController.testing );
// router.post('/new', flightController.newFLight);
// router.get('/show', flightController.showFlights);
// router.get('/new', flightController.newForm);

module.exports = Router