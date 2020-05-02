const path = require("path")



function htmlRoutes(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
    app.get("/form", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/form.html"))
    })
    app.get("/tableView", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/tableView.html"))
    })
} 

module.exports = htmlRoutes