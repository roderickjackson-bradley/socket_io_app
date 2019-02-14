// Server
const express = require('express');
const path = require('path');
const app = express();
const flightsRoutes = require('./routes/flightsRoutes');
const port = 5000;

require('./config/database');

// View Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/', flightsRoutes);


app.listen(port, () => {
    console.log(`You are on ${port}`);
});