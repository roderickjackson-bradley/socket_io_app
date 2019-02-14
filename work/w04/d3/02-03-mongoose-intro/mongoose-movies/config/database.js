// JS

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connect to MongoDB at ${db.host}:${db.port}`);
});