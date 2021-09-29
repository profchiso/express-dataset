const db = require("../db-con")

exports.getAllEvents = async(req, res) => {

        try {
            db.all("SELECT * FROM event ORDER BY id", (err, result) => {
                        if (err) {
                            console.log(error)
                            res.status(500).json({ success: false, message: "something went wrong", data: [] })
                        } else {

                            res.status(200).json({
                                        success: true,
                                        message: `${result.length? `${result.length} returned`:`0 event returned`} `,
                                        data: { result } 
                                })

            }

        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "something went wrong", data: [] })

    }

};

exports.addEvent = async(req, res) => {

    try {
     

         //check for exist first
         let para=[req.body.id, req.body.type,req.body.actor,req.body.repo,req.body.created_at]

        db.run(`INSERT INTO event (id, type,actor,repo,created_at) VALUES (?,?)`,para , function(err) {
            
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


exports.getByActor = (req, res) => {

    try {
        db.get("SELECT * FROM event WHERE actor=?",[req.params.id], (err, result) => {
                    if (err) {
                        console.log(error)
                        res.status(500).json({ success: false, message: "something went wrong", data: [] })
                    } else {

                        res.status(200).json({
                                    success: true,
                                    message: `${result.length? `${result.length} returned`:`0 event returned`} `,
                                    data: { result } 
                            })

        }

    })

} catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "something went wrong", data: [] })

}




};


exports.eraseEvents = async(req, res) => {
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

};

// module.exports = {
// 	getAllEvents: getAllEvents,
// 	addEvent: addEvent,
// 	getByActor: getByActor,
// 	eraseEvents: eraseEvents
// };