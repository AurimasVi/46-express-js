const express = require("express");

const server = express();
server.use(express.json());

const cars = [
  {
    id: 1,
    brand: "toyota",
  },
  {
    id: 2,
    brand: "bmw",
  },
];

server.get("/cars", (req, res) => {
  console.log("get request received");
  res.send(cars);
});

server.get("/cars/:id", (req, res) => {
  const requestedCar = cars.find((car) => car.id === +req.params.id);
  console.log({ requestedCar, id: req.params.id });
  res.send(requestedCar);
});

server.post("/cars", (req, res) => {
  console.log(req.body);
  cars.push(req.body);
  res.status(201).end();
});

server.listen(3000, () => {
  console.log("server is running");
});
