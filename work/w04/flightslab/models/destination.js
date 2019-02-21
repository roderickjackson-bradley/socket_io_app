var mongoose = require('mongoose');

var Schema = mongoose.Schema;

 var destinationsSchema = new Schema({
  
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        required: true
    },
    arrival: {
        type: Date,
    }
 });    

 module.exports = mongoose.model('Flight', destinationsSchema);