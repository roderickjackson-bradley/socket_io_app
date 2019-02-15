const Flight =  require('../models/flights');

function testing(req, res) {
    console.log(req.body)
};

function newForm(req, res) {
    res.render('./new');
}

function newFlight(req, res) {
    for (let key in req.body) {
         if (req.body[key] === '') {
             delete req.body[key];
         }
     }
    Flight.create(req.body);
    console.log(req.body);
    res.redirect('/show');
  }

const showFlights = (req, res) => {
    const allFlights = Flight.find({});
    res.render('./flights/index', {
        flights: allFlights
    })
}

module.exports = {
    testing, newFlight, showFlights, newForm
}