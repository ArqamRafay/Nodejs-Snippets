const express = require("express");
const nodeCache = require("node-cache");
const cors = require("cors");
const http = require('http');
var bodyParser = require('body-parser');

const app = express();
const port = 4200;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

var corsOption = {
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    exposedHeaders: [
        "Authorization",
        "Content-Type",
        "x-auth-token",
        "authorization",
        "Access-Control-Allow-Headers"
    ],
    credentials: true,
};
app.use(cors(corsOption));
app.use("*", cors(corsOption));

app.use(require("./routes/index.route.js"));

app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => {
    console.log("Server is running on port " + port)
})
server.timeout = 500000;
console.log('Server running on localhost:' + port);

module.exports = app;
