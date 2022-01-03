const express = require('express');

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!!");
})

app.get("/home", (req, res) => {
    res.send("Welcome to our page");
})

app.get("/about", (req, res) => {
    res.send("About us...");
})

app.get("/home/:name", (req, res) => {
    res.send("Welcome " + req.params.name);
})

app.get("/home/user/:name/:age", (req, res) => {
    if (req.params.age < 18) {
        res.send("Hello " + req.params.name + ", you're too young.")
    }
    else
        res.send("Welcome " + req.params.name + ", you're " + req.params.age + " years old.");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});