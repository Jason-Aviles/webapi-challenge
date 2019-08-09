const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
server.use(bodyParser.json());
server.use(cors());

const port =  5000;



let data =[{
  id: 1,
  name: 'Frodo Baggins',
  chores: [
    {
      id: 1,
      description: 'take the ring to Mordor',
      notes: 'make your way to Mount Doom',
      assignedTo: 1, // the id of Frodo,
      completed: true
    },
    {
      id: 2,
      description: 'destroy the ring',
      notes: 'cast the ring into the fire inside Mount Doom',
      assignedTo: 1,
      completed: false
    },
  ]
},

]

console.log()



server.get('/', (req,res)=>{

  
res.json(data.chores)



})



server.get('/:id', (req,res)=>{
  const chores = data.map(x =>x.chores)
  const { id } = req.params;

  const findById = people => {
    return people.id == id;
  };
  const gettingPerson = data.find(findById);

  if(!gettingPerson){
    res.status(400).json({message:'no id'})
  }else{

    if (chores) gettingPerson.chores = chores;
    res.json(data)
  }

})
let peopleId = 1;

server.post("/", (req,res)=>{


})






server.listen(port, () => console.log(`connected to port ${port}`));
