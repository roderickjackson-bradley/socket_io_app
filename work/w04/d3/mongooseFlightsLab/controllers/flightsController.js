const Flight =  require('../models/flights');


module.exports = { index, new: newForm, create }


function index(req, res){
    Flight.find({}, (err, flights) => {
        res.render('flights/index', {flights})
    })
}

function create(req, res){
    var newFlight = new Flight()

    newFlight.airport  = req.body.airport
    newFlight.airline  = req.body.airline
    newFlight.flightNo = req.body.flightNo

    newFlight.save((err, flights) => {
        res.redirect('/flights')
    })
}


function newForm(req, res){
    res.render('flights/new')
}

// function index(req, res) {
//     Flight.find({}, (err, flights) => {
//         res.render('flights/index', {flights: 'All Flights' ,flights})
//     })
// }

// function newForm(req, res){
//     res.render('flights/new')
// }

// function show(req, res){
//     Flight.findById(req.params.id, (err, flights) => {
//         res.render('flights/show', {flights})
//     })
// }

// function newFlight(req, res) {
//     res.render('flights/new')
// }

// function create(req, res){
//     flight.airport = req.body.airport || flight.airport
//     flight.airline = req.body.airline || flight.airline
//     flight.flightNo = req.body.flightNo || flight.flightNo

//     flight.save(function(err, flight){
//         res.render('/flights')
//     })
// }

// function testing(req, res) {
//     console.log(req.body)
// };

// function newForm(req, res) {
//     res.render('./new');
// }

// function newFlight(req, res) {
//     for (let key in req.body) {
//          if (req.body[key] === '') {
//              delete req.body[key];
//          }
//      }
//     Flight.create(req.body);
//     console.log(req.body);
//     res.redirect('/show');
//   }
