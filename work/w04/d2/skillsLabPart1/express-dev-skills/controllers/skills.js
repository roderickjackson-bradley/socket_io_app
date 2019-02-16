var Skill = require('../models/skills')

module.exports = { index, show, create, update, new: newSkill, edit, delete: deleteSkill }

// Index 
function index(req, res){res.render('skills/index', 
{skills: Skill.getAll()}
)}

// Show
function show(req, res){res.render('skills/show', {
    skills: Skill.getOne(req.params.id),
    skillNum: parseInt(req.params.id) + 1
})}

// Edit
function edit(req, res) {
    let skill =  Skill.getOne(req.params.id)
    res.render('skills/edit', {skill, id: req.params.id})
}

// Create
function create(req, res){
    req.body.done = false;
    Skill.create(req.body);
    res.redirect('skills');
};

// New
function newSkill(req, res){
    res.render('skills/new')
}

// Delete
function deleteSkill(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
};

// Update
function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect('/skills');
}

