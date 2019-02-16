// Routes for Skills
const Router = require('express').Router(),
skillsController = require('../controllers/skills')

Router.get('/', skillsController.index)
Router.get('/new', skillsController.new)
Router.get('/:id', skillsController.show)
Router.post('/', skillsController.create)
Router.delete('/', skillsController.delete)
Router.get('/:id/edit', skillsController.edit)
Router.put('/:id', skillsController.update);

module.exports = Router
