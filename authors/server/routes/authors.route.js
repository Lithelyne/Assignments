const AuthorsController = require("../controllers/authors.controller")

module.exports = (app) => {
    app.get("/api/authors", AuthorsController.allAuthors)
    app.get("/api/authors/:id", AuthorsController.oneAuthors)
    app.post("/api/authors", AuthorsController.addAuthors)
    app.patch("/api/authors/:id", AuthorsController.updateAuthors)
    app.delete("/api/authors/:id", AuthorsController.deleteAuthors)
}