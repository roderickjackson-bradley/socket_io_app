 const skills = [
   {skill: 'Feed Dogs', done: true},
   {skill: 'Learn Express', done: false},
   {skill: 'Buy Milk', done: false}
 ];
 
 module.exports = {
   getAll
 };
 
 function getAll() {
   return skills;
 }