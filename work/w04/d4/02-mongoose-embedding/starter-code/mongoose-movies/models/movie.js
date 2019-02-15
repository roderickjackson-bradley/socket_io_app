var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var reviewSchema = mongoose.Schema;

var reviewSchema = new Schema({
  content: String,
  rating: {
    type: String,
     min: 1, 
     max: 5,
 default: 5
  }
},{ 
  timestamps: true
});



var movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  }, mpaaRating: String,
  cast: [String],
  nowShowing: { type: Boolean, default: false },
  reviews: [reviewsSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);