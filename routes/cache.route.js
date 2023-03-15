const express = require("express"),
    router = express.Router();

const cacheController = require("../controllers/cache.controller");

router.route("/todos").get((req, res) => cacheController.todos(req, res));
router.route("/stats").get((req, res) => cacheController.stats(req, res));

module.exports = router; 