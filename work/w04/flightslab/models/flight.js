var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// destinationSchema
var destinationSchema = new Schema({
  
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        required: true
    },
    arrival: {
        type: Date,
    }
 }); 

 // flightSchema
 var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: function() {
            var date = new Date();
            return new Date(date.setFullYear(date.getFullYear() + 1));
          }
    },

    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        default: 'SEA'
    },
    destination: [destinationSchema]
},{ 
    timestamps: true  
 });    

 module.exports = mongoose.model('Flight', flightSchema);