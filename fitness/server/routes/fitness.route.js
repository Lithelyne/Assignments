const FitnessController = require("../controllers/fitness.controller")

module.exports = (app) => {
    app.get("/api/users", FitnessController.allUsers)
    app.get("/api/users/:id", FitnessController.oneUsers)
    app.post("/api/users", FitnessController.addUsers)
    app.patch("/api/users/:id", FitnessController.updateUsers)
    app.delete("/api/users/:id", FitnessController.deleteUsers)
}