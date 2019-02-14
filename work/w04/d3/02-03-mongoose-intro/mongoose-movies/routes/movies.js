var express = require('express');
var router = express.Router();
var moviesController = require('../controllers/movies');


router.get('/', moviesController.index);
router.get('/new', moviesController.new);
router.post('/', moviesController.create);


module.exports = router;
