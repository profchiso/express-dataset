var express = require('express');
var router = express.Router();
const { getAllEvents, getByActor, addEvent, eraseEvents } = require("../controllers/events")

// Routes related to event

router.get("/", getAllEvents);
router.get("/actors/:id", getByActor);
router.post("/", addEvent);
router.delete("/", eraseEvents)


module.exports = router;