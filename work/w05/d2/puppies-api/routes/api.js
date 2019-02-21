var express = require('express');
var Router = express.Router();
var puppiesController = require('../controllers/api/puppies')

Router.get('/puppies', puppiesController.index)
Router.post('/puppies', puppiesController.create)
Router.post('/puppies/:id', puppiesController.show)
Router.delete('/puppies/:id', puppiesController.delete)
Router.put('/puppies/:id', puppiesController.update)
// puppiesCtrl.getOnePuppy
// puppiesCtrl.createPuppy
// puppiesCtrl.updatePuppy
// puppiesCtrl.deletePuppy
module.exports = Router;
