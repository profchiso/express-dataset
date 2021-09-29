var express = require('express');
var router = express.Router();
const { getAllActors, getStreak, updateActor, addActor } = require("../controllers/actors")

// Routes related to actor.
router.get("/", getAllActors)
router.put("/:id", updateActor)
router.get("/streak", getStreak)
router.post("/", addActor)


module.exports = router;