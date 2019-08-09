const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
server.use(bodyParser.json());
server.use(cors());

const port = 8000;

let data = [
  {
    id: 1,
    name: "Frodo Baggins",
    chores: [
      {
        id: 1,
        description: "take the ring to Mordor",
        notes: "make your way to Mount Doom",
        assignedTo: 1, // the id of Frodo,
        completed: true
      },
      {
        id: 2,
        description: "destroy the ring",
        notes: "cast the ring into the fire inside Mount Doom",
        assignedTo: 1,
        completed: false
      }
    ]
  }
];

server.get("/chores", (req, res) => {
  res.json(data);
});

server.get("/chores/:id", (req, res) => {
  const chores = data.map(x => x.chores);
  const { id } = req.params;

  const findById = people => {
    return people.id == id;
  };
  const gettingPerson = data.find(findById);

  if (!gettingPerson) {
    res.status(400).json({ message: "no id" });
  } else {
    if (chores) gettingPerson.chores = chores;
    res.json(data);
  }
});

server.get("/chores/completed", (req, res) => {
  const completed = req.query.completed;
  const Datapeople = data.map(x => x.chores);

  if (completed) {
    const filter = completed === "true" ? true : false;
    const choresMap = Datapeople.filter(x => x.completed === filter);
    res.status(200).json(choresMap);
  } else {
    res.status(200).json(Datapeople);
  }
});
let peopleId = 2;

server.post("/", (req, res) => {
  const { name } = req.body;
  const Newpeople = { name, id: peopleId };
  const findByName = data => {
    return data.name === name;
  };
  if (data.find(findByName)) {
    res.status(400).json({ message: "person exsit" });
  }
  data.push(Newpeople);
  peopleId++;
  res.json(data);
});

server.put("/", (req, res) => {
  const { id } = req.params;
  const findById = data => {
    return data.id == id;
  };

  const foundPeople = data.find(findById);
  if (!foundPeople) {
    res.status(400).json({ message: "no id" });
  } else {
    if (name) foundPeople.name = name;

    res.json(data);
  }
});

server.delete("/", (req, res) => {
  const { id } = req.params;
  const foundData = data.find(people => people.id == id);

  if (foundData) {
    const peopleRemoved = { ...foundData };
    data = data.filter(people => people.id != id);
    res.status(200).json(data);
  } else {
    res.status(401).json("No  DB", res);
  }
});

server.listen(port, () => console.log(`connected to port ${port}`));
