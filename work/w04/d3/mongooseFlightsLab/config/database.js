const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongooseFlights', {useNewUrlParser: true});

// shortcut to mongoose.connection object
var db = mongoose.connection;

db.on('connected', () => {console.log(`Connected to MongoDB at ${db.host}:${db.port}`)})

