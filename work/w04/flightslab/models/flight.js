var mongoose = require('mongoose');

var Schema = mongoose.Schema;

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
    }
 });    

 module.exports = mongoose.model('Flight', flightSchema);