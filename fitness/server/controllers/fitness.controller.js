const Users = require("../models/fitness.model")

//Get All
module.exports.allUsers = (req, res) => {
    Users.find()
        .then(usersList => res.json(usersList))
        .catch(err=>res.status(400).json(err))
}

//Get One
module.exports.oneUsers = (req, res) => {
    Users.findOne({_id: req.params.id})
        .then(foundUsers=>res.json(foundUsers))
        .catch(err=>res.status(400).json(err))
}

//Create
module.exports.addUsers = (req, res) => {
    Users.create(req.body)
        .then(newUsers => res.json(newUsers))
        .catch(err=>res.status(400).json(err))
}

//Update 
module.exports.updateUsers = (req, res) => {
    Users.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators:true}
    )
        .then(updatedUsers => res.json(updatedUsers))
        .catch(err=>res.status(400).json(err))
}


//Delete
module.exports.deleteUsers = (req, res) => {
    Users.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.status(400).json(err))
}