var sqlite3 = require("sqlite3").verbose()


const DBSOURCE = ":memory:"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.');

        db.run(`CREATE TABLE  IF NOT EXISTS actor(id INTEGER PRIMARY KEY ,login TEXT, avatar_url TEXT);`, (result, err) => {
            if (err) {
                console.log(err)
            } else {
                console.log(result)
            }
        })

        db.run(`CREATE TABLE  IF NOT EXISTS event(id INTEGER PRIMARY KEY,type TEXT, actor TEXT, repo TEXT,created_at TEXT,FOREIGN KEY(actor) REFERENCES actor(id));`, (result, err) => {
            if (err) {
                console.log(err)
            } else {
                console.log(result)
            }
        })

    }
});


module.exports = db