const ProductsController = require("../controllers/product.controller")

module.exports = (app) => {
    app.get("/api/testing", ProductsController.apiTest)
    app.get("/api/Products", ProductsController.allProducts)
    app.get("/api/Products/:id", ProductsController.oneProducts)
    app.post("/api/Products", ProductsController.addProducts)
    app.put("/api/Products/:id", ProductsController.updateProducts)
    app.delete("/api/Products/:id", ProductsController.deleteProducts)
}
