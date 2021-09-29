var express = require('express');
var router = express.Router();
var db = require("../db-con")

// Route related to delete events

router.delete("/:id", async(req, res) => {
    const { id } = req.params
    try {
        db.run(`DELETE FROM event WHERE id=?`, id, function(err) {
            if (err) {

            } else {
                res.status(200).json({ success: true, message: `Deleted event with id ${id}`, data: [] })
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "something went wrong", data: [] })

    }

})

router.delete("/", async(req, res) => {
    try {
        db.run(`DELETE FROM event`, function(err) {
            if (err) {

            } else {
                res.status(200).json({ success: true, message: "All event deleted", data: [] })
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "something went wrong", data: [] })

    }

})



module.exports = router;