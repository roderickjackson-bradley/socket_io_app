// utility to initialize database

require('./config/database')
const Movie = require('./models/movie')
const Performer = require('./models/performer')
//const data = require('./data'

/*-- For each exercise below, write the code as described --*/

Promise.resolve().then(() => {
    console.log('HERE')
    // 1) Find all movie docs
    //return Movie.find({});  // remember to return the promise!
  })
  .then((result) => {
    console.log('1): ', result)
    // 2) Find all performer docs
    //return Performer.find({})
  })
  .then((result) => {
    console.log('2): ', result)
    // Follow the same .then structure used above from this point forward
    // Don't forget to console.log the exercise number also as shown above 
    // 3) Find all movies with an MPAA Rating of 'PG'
    //return Movie.find({mpaaRating:'PG'})
  })
  .then((result) => {
     console.log('3):', result)
     // 4) Find all movies that are still showing
     //return Movie.find({nowShowing: true})
  })
  .then((result) => {
     console.log('4):', result)
      // 5) Find all movies with an MPAA Rating of 'PG' or 'PG-13'
      //var queryMpaaRating = {$or:[{mpaaRating: "PG"}, {mpaaRating: "PG-13"}]}
      //return Movie.find(queryMpaaRating)
  })
  .then((result) => {
     console.log('5):', result)
      // 6) Find the first movie found with a releaseYear of 2018
      //let queryDate2018 = {$gte: [{releaseYear: '2018'}]}
      //var queryDate2018 = new Date(2018)
      //return Movie.findOne({releaseYear: "2018"}) 
  })
  .then((result) => {
    console.log('6):', result)
      // 7) Find all movies released after 1980
     //return Movie.find({
        //releaseYear: {$gte : parseInt(1980)},
        //releaseYear: {$lte : parseInt(2019)}
     // })
 })
  .then((result) => {
    console.log('7):', result)
     // 8) Find all movies whose titles start with a 'C'
     // Hint: StackOverflow will show how to use a regular expression
     //return Movie.find({title: {$regex: /\bc\S+\b/ig}})
 })
  .then((result) => {
    console.log('8):', result)
     // 9) Find the performer named 'Rami Malek'
     return Movie.Performer.find({cast: "Rami"})
 })
  .then((result) => {
    console.log('9):', result)
     // 9) Find the performer named 'Rami Malek'
 })
  .then(() => {
    process.exit();
  });

  
    
  
  
   
  
  
    
    
  
 
    
  

    
    
    // 10) Find all performers born before 1980
    
    
    // 11) Find all performers whose name starts with a 'J'
  
  
    // 12) Add a reference to performer 'Bill Murray' to
    //     the movie Caddyshack's cast property and save.
    //     console.log the updated movie.
  
  
