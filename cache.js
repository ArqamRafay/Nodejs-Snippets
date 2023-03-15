const express = require("express")
const router = express.Router()

// Adding
// router.route("/todos").get();
const app = express();
// const port = 3000;

router.route('/todos', (req, res) => {

    console.log("Getting it from API")
    return res.send("Hello World")
    // if (myCache.has("todos")) {
    //     console.log("Getting it from cache");
    //     return res.send(myCache.get("todos"))

    // } else {
    //     fetch(todoURL)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             myCache.set("todos", json);
    //             console.log("Getting it from API")
    //             res.send(json)
    //         })
    // }
})


module.exports = router;