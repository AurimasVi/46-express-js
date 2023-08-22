const express = require("express");

const server = express();
server.use(express.json());

const users = ["Alex", "Rose", "Megan"];
// const users = [{ name: "Alex", name: "Rose", name: "Megan" }];

server.get("/api/users", (req, res) => {
  console.log("get request received");
  res.send(users);
});

server.get("/api/users/:firstLetter", (req, res) => {
  const requestedName = users.filter(
    (user) =>
      user.charAt(0).toLowerCase() === req.params.firstLetter.toLowerCase()
  );
  console.log({ requestedName, firstLetter: req.params.firstLetter });
  res.send(requestedName);
});

server.post("/api/users", (req, res) => {
  users.push(req.body.name);
  res.send(users);
  res.status(201).end();
});

server.listen(3000, () => {
  console.log("server is running");
});
