
var Todo = require('../models/todo');

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
  edit,
  update
};

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
    time: req.time
  });
}

function newTodo(req, res){
  res.send('todos/new');
};
 
function create(req, res){
  console.log(req.body);
  req.body.done = false;
  Todo.create(req.body);
  res.redirect('/ todos');
};

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    todoNum: parseInt(req.params.id) + 1
  });
}

function deleteTodo(req, res){
  Todo.deleteOne(req.params.id);
  res.redirect('/todos');
};

function edit(req, res){
 res.render('todos/edit', {
   todo: Todo.getOne(req.params.id),
   idx: req.params.id
 });
};

function update(req, res) {
  req.body.done = req.body.body === 'on';
  Todo.update(req.params.id, req.body);
  res.redirect('/todos');
}