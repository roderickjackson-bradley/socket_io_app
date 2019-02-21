var Puppy = require('../../models/puppy');

module.exports = {
index, create, show, delete: deletePuppy, update/* new: newFormForFlight, create, update*/
};

function index(req, res){
    Puppy.find({}).then((puppies) => {
        res.status(200).json(puppies)
    })
}

function create(req, res){
    Puppy.create(req.body).then((puppy) => {
        res.status(201).json(puppy)
    })
}

function show(req, res){
    Puppy.findById(req.params.id).then((puppy) => {
        res.status(201).json(puppy)
    })
}

function deletePuppy(req, res){
    Puppy.findByIdAndRemove(req.params.id).then((puppy) => {
        res.status(200).json(puppy)
    })
}

function update(req, res){
    Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((puppy) => {
        res.status(201).json(puppy)
    })
}

