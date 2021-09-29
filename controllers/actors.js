var db = require("../db-con")
exports.getAllActors = async(req, res) => {

    try {
        db.all("SELECT * from actor", (err, result) => {

            if (err) {
                console.log(err)
                res.status(500).json({ success: false, message: "something went wrong", data: [] })
            } else {

                res.status(200).json({ success: true, data: { result } })

            }

        })

    } catch (error) {
        console.log(error)

    }

};

exports.updateActor = (req, res) => {

};

exports.getStreak = (req, res) => {

};
exports.addActor = (req, res) => {

    try {

        //check for exist first

        db.run(`INSERT INTO actor (id,login, avatar_url) VALUES (?,?)`, [req.body.id, req.body.login, req.body.avatar_url], function(err) {
            console.log(err)
            if (err) {
                console.log(err)
            } else {

                res.status(201).json({ success: true, data: { result: this.lastID } })

            }

        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "something went wrong", data: [] })

    }

};


// module.exports = {
//     updateActor: updateActor,
//     getAllActors: getAllActors,
//     getStreak: getStreak
// };