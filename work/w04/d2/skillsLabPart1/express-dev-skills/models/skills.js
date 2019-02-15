 const skills = [
   {name: 'Programming', desc: "I'm awesome at Programming" },
   {name: 'Public Speaking', desc: "I'm awesome at Public Speaking" },
   {name: 'Power Lifting', desc: "I'm awesome at Power Lifting"}
 ];
 
 module.exports = { getAll, getOne };
 
function getAll(){return skills }

function getOne(){return skills[1]}