const reservation = require("../data/reservation.js")
const waitingList = require("../data/waitingList.js")
const fs = require("fs")

function apiRoutes(app) {

    app.post("/api/reservation" , (req, res) => {
        const newReservation = req.body;    
        const reservationNum = reservation.length

        if (reservationNum < 5) {
            reservation.push(newReservation);
        } else {
            waitingList.push(newReservation);
        }
    })
    app.get("/api/tables", (req, res) => {
        // return res.json(reservation)
        return res.json(reservation)
    })
    app.get("/api/waitingList", (req, res) => {
        return res.json(waitingList)
    })
}

module.exports = apiRoutes