// moviesControllers
var Movie = require('../models/movie');


module.exports = {
    new: newMovie,
    create, index
};


function index(req, res){
    Movie.find({}, function(err, movies){
        res.render('movies/index', {movies});
    });
};

function create(req, res){
    req,body.nowShowing = !!req.body.nowShowing;
  
    req,body.cast = req.body.cast.replace(/\s*,\s*/g, ',');

    if (req.body.cast) req.body.cast = req.body.cast.split(',');

    var movie = new Movie(req.body);
    movie.save(function(err){
        if (err) return res.render('movies/new');
        console.log(movie);

        res.redirect('/movies/new');
    });
};

function newMovie(req, res){
    res.render('movies/new');
};

function index(req, res){
    res.render('movies/index')
}
