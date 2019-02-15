// Routes for Skills
const Router = require('express').Router(),
skillsController = require('../controllers/skills')


/* GET users listing. */
Router.get('/', skillsController.index)

module.exports = Router
