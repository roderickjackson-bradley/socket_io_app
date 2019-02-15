var Skill = require('../models/skills')

module.exports = { index, show }

// Index function for skills will display the full list of skills
function index(req, res){res.render('skills/index', {skills: Skill.getAll()})}

function show(req, res){res.render('skills/show', {
    skills: Skill.getOne(),
    skillNum: parseInt(req.params.id) + 1
})}
