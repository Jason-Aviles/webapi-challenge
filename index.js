const express = require("express");

const server = express();
const port = process.env.PORT  || 5000;



const data ={
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
}







server.get('/', (req,res)=>{



})












server.listen(port, () => console.log(`connected to port ${port}`));
