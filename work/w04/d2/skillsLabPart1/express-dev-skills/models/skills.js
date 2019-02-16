 
 // My Super Basic Database
 const skills = [
   {name: 'Programming', desc: "I'm awesome at Programming" },
   {name: 'Public Speaking', desc: "I'm awesome at Public Speaking" },
   {name: 'Power Lifting', desc: "I'm awesome at Power Lifting"}
 ];
 
 module.exports = { getAll, getOne, update, create, deleteOne };
 
 // Get All Items
function getAll(){return skills }

// Get One Item by ID
function getOne(id){return skills[id]}

// Update
function update(id, skill) { skills[id] = skill }

// Create
function create(skill){ skills.push(skill) }

// Delete
function deleteOne(id){ skills.splice(id, 1) }


