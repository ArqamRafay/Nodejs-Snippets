const express = require("express");
// const fetch = require("node-fetch");
const fetch = require("node-fetch@2");
const nodeCache = require("node-cache");

const myCache = new nodeCache({ stdTTL: 10 });

const app = express();
const port = 3000;

const todoURL = 'https://jsonplaceholder.typicode.com/todos';

app.get('/todos', (req, res) => {
    res.status(200).send({ Data: 'Hello world' })
})

app.listen(port, () => {
    console.log("Server is runining on port " + port)
})
