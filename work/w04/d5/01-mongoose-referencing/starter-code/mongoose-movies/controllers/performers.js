const Performer =  require('../models/performer');
const Movie = require('../models/movie')

function newPerformer(req, res){
    Performer.find({}, (err, performers) => {
        if(err){
            console.log(err)
            return next(err)
        }
        else{
            res.render('performer/new', {
                title: 'Add Performer ',
                performers
            })
        }
    })
}

function create(req, res, next){
    Performer.create(req.body, (err, performer) => {
        if(err){
            console.log(err)
            return next(err)
        }
        else{
            res.redirect('/performers/new')
        }
    })
}

function addToCast(req, res, next){
    Movie.findById(req.params.id, (err, movie) => {
        if(err){
            console.log(err)
            return next(err)
        }
        else{
            movie.cast.push(req.body.performerId)
            movie.save((err, next) => {
                if(err){
                    console.log(err)
                    return next(err)
                }
                else{
                    res.redirect(`/movies/${movie._id}`)
                }
            })
        }
    })
}

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

// const showFlights = (req, res) => {
//     const allFlights = 
//     Flight.find({});
//     res.render('./flights/index', {
//         flights: allFlights
//     })
// }

module.exports = { new: newPerformer, create, addToCast }