const Authors = require("../models/authors.model")

//Get All
module.exports.allAuthors = (req, res) => {
    Authors.find()
        .then(authorsList => res.json(authorsList))
        .catch(err=>res.json(err))
}

//Get One
module.exports.oneAuthors = (req, res) => {
    Authors.findOne({_id: req.params.id})
        .then(foundAuthors=>res.json(foundAuthors))
        .catch(err=>res.json(err))
}

//Create
module.exports.addAuthors = (req, res) => {
    Authors.create(req.body)
        .then(newAuthors => res.json(newAuthors))
        .catch(err=>res.json(err))
}

//Update 
module.exports.updateAuthors = (req, res) => {
    Authors.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators:true}
    )
        .then(updatedAuthors => res.json(updatedAuthors))
        .catch(err=>res.json(err))
}


//Delete
module.exports.deleteAuthors = (req, res) => {
    Authors.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.json(err))
}