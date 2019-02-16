var Movie = require('../models/movie');
var Performer = require('../models/performer')

module.exports = { index, show, new: newMovie, create };

function show(req, res, next){
  Movie.findById(req.params.id).populate('cast').exec((err, movie) => {
    if(err){
      console.log(err)
      return next(err)
    }
    else{
      // Performer.find({}).where('_id').nin(movie.cast)
      Performer.find({_id: {$nin: movie.cast}}).exec((err, performers) => {
        if(err){
          console.log(err)
          return next(err)
        }
        else{
          console.log(performers)
          res.render('movies/show', {title: 'Movie Detail', movie, performers})
        }
      })
    }
  })
}

// function show(req, res){
//   Movie.findById(req.params.id).populate('cast').exec((err, movie) => {
//     if(err){
//       res.send(err)
//     }
//     else{
//       res.render('movies/show', {title: 'Movie Detail', movie})
//     }
//   })
// }

// function show(req, res) {
//   Movie.findById(req.params.id, function(err, movie) {
//     res.render('movies/show', { title: 'Movie Detail', movie });
//   });
// }

function index(req, res) {
  Movie.find({}, function(err, movies) {
    res.render('movies/index', { title: 'All Movies', movies });
  });
}



function newMovie(req, res) {
  res.render('movies/new', { title: 'Add Movie' });
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var movie = new Movie(req.body);
  movie.save(function(err) {
    if (err) return res.redirect('/movies/new');
    // console.log(movie);
    res.redirect(`/movies/${movie._id}`);
  });
}
