// Routes for Skills
const Router = require('express').Router(),
skillsController = require('../controllers/skills')


/* GET users listing. */
Router.get('/', skillsController.index)
Router.get('/:id', skillsController.show)

module.exports = Router
