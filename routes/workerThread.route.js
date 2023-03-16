const express = require("express"),
    router = express.Router();

const workerThreadController = require("../controllers/workerThread.controller");

router.route("/simpleThread").get((req, res) => workerThreadController.simpleTask(req, res));
router.route("/heavy").get((req, res) => workerThreadController.heavyTask(req, res));

module.exports = router; 