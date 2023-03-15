

const nodeCache = require("node-cache");
const myCache = new nodeCache({ stdTTL: 10 });
const fetch = require("node-fetch");

const todos = async function (user, res) {
    const todoURL = 'https://jsonplaceholder.typicode.com/todos';

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
}
 
const stats = async function (user, res) {
    return res.send(myCache.getStats())
}

module.exports = {
    todos,
    stats
};