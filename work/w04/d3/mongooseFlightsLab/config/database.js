const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongooseFlights', {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log(`You are connected`);
})