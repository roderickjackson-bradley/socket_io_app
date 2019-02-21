var Flight = require('../models/flight');

module.exports = {
index, new: newFormForFlight, create, update, show
};

function index(req, res){
    Flight.find({}, (err, flights) => {
        res.render('flights/index', {flights})
    })
}

function newFormForFlight(req, res){
    res.render('flights/new')
}

function create(req, res){
    let newFlight = new Flight()

    
    newFlight.airport  = req.body.airport
    newFlight.airline  = req.body.airline
    newFlight.flightNo = req.body.flightNo

    newFlight.save((err, flights) => {
        if (err) return res.render('flights/new')

        res.redirect('/')
    })
}

function update(req, res){
    Flight.findById(req.params.id, (err, flight) => {

        newFlight.airport  = req.body.airport  || newFlight.airport
        newFlight.airline  = req.body.airline  || newFlight.airline
        newFlight.flightNo = req.body.flightNo || newFlight.flightNo
    
    })
}

function show(req, res){
    Flight.findById(req.params.id, (err, flight) => {
        res.render('flights/show')
    })
}