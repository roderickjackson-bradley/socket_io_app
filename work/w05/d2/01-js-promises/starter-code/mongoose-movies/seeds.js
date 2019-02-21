// utility to initialize database

require('./config/database')
const Movie = require('./models/movie')
const Performer = require('./models/performer')
const data = require('./data')

const p1 = Movie.deleteMany({})
const p2 = Performer.deleteMany({})

Promise.all([p1, p2]).then((results) => {
    console.log(results)
    return Performer.create(data.performers)
})
.then((performers) => {
    console.log(performers)
    return Movie.create(data.movies)
})
.then((results) => {
    console.log(results)
})
.then((movies) => {
    return Promise.all([
        Performer.findOne({name: 'Mark Hamill'}),
        Movie.findOne({title: 'Star Wars - A New Hope'})
    ])
})
.then((results) => {
    const mark = results[0]
    const starWars = results[1]
    starWars.cast.push(mark)
    return starWars.save()
})
.then(() => {
    process.exit()
})

// Movie.deleteMany({}).then((results) => {
//     console.log(results)
//     process.exit()
// })

// Movie.deleteMany({}).then((results) => {
//     console.log('Deleted movies: ', results)
//     return Performer.deleteMany({})
// })
// .then((results) => {
//     console.log('Deleted performers:', results)
// })
// .then(() => {
//     process.exit()
// })
