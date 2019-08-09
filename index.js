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

  
res.json(data)



})



server.get('/people/:id', (req,res)=>{
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


server.get("/completed", (req,res)=>{
  const Datapeople = data.map(x =>x.chores )
 const choresMap =  Datapeople.map(x => x )
 console.log(choresMap)
 
    res.json(choresMap)
  

})
let peopleId = 1;

server.post('/', (req,res)=>{

  const {name} = req.body
const  Newpeople ={name ,id:peopleId}
const findByName = data => {
  return data.name === name;
};
if(data.find(findByName)){
res.status(400).json({message:'person exsit'})
}
data.push(Newpeople);
peopleId++;
res.json(data);
})



server.put("/", (req,res)=>{
  const { id } = req.params;
  const findById = data => {
    return data.id == id;
  };

const foundPeople = data.find(findById)
if(!foundPeople){
  res.status(400).json({message:'no id'})
}
else{
  if (name) foundPeople.name = name

res.json(data)
}
})



server.delete('/',(req,res)=>{
  const { id } = req.params;
  const foundData = data.find(people => people.id == id);

  if (foundData) {
    const SmurfRemoved = { ...foundData };
    data = data.filter(people => people.id != id);
    res.status(200).json(data);
  } else {
   res.status(401).json("No smurf by that ID exists in the smurf DB", res);
  }
})







server.listen(port, () => console.log(`connected to port ${port}`));
