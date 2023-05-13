const JokesController = require("../controllers/jokes.controller")

module.exports = (app) => {
    app.get("/api/testing", JokesController.apiTest)
    app.get("/api/jokes", JokesController.allJokes)
    app.get("/api/jokes/:id", JokesController.oneJokes)
    app.post("/api/jokes", JokesController.addJokes)
    app.put("/api/jokes/:id", JokesController.updateJokes)
    app.delete("/api/jokes/:id", JokesController.deleteJokes)
}
