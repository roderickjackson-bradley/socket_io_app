const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightsController');

router.post('/testing', flightController.testing );
//router.post('/new', flightController.newFLight);
// router.get('/show', flightController.showFlights);
router.get('/new', flightController.newForm);

module.exports = router;