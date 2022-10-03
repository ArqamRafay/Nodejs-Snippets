const express = require("express");
const fetch = require("node-fetch");
// const fetch = require("node-fetch@2");
const nodeCache = require("node-cache");

const myCache = new nodeCache({ stdTTL: 10 });

const app = express();
const port = 3000;

const todoURL = 'https://jsonplaceholder.typicode.com/todos';

app.get('/todos', (req, res) => {
    if (myCache.has("todos")) {
        console.log("Getting it from cache");
        return res.send(myCache.get("todos"))

    } else {
        fetch(todoURL)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("todos", json);
                console.log("Getting it from API")
                res.send(json)
            })
    }
})

app.get("/stats", (req, res) => {
    return res.send(myCache.getStats())
})

app.listen(port, () => {
    console.log("Server is running on port " + port)
})
