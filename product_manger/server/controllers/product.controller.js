const Products = require("../models/product.model")


module.exports.apiTest = (req, res) => {
    res.json({message:"ok"})
}


//all products
module.exports.allProducts = (req, res) => {
    Products.find()
        .then(productsList => res.json(productsList))
        .catch(err=>res.json(err))
}

//one product
module.exports.oneProducts = (req, res) => {
    Products.findOne({_id: req.params.id})
        .then(foundProducts=>res.json(foundProducts))
        .catch(err=>res.json(err))

}

//create Products
module.exports.addProducts = (req, res) => {
    Products.create(req.body)
        .then(newProducts => res.json(newProducts))
        .catch(err=>res.json(err))
}

//update Products
module.exports.updateProducts = (req, res) => {
    Products.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators:true}
    )
        .then(updatedProducts => res.json(updatedProducts))
        .catch(err=>res.json(err))
}

//delete Products
module.exports.deleteProducts = (req, res) => {
    Products.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.json(err))

}
