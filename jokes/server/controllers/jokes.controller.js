const Jokes = require("../models/jokes.models")


module.exports.apiTest = (req, res) => {
    res.json({message:"ok"})
}


//all jokes
module.exports.allJokes = (req, res) => {
    Jokes.find()
        .then(jokesList => res.json(jokesList))
        .catch(err=>res.json(err))
}

//one joke
module.exports.oneJokes = (req, res) => {
    Jokes.findOne({_id: req.params.id})
        .then(foundJokes=>res.json(foundJokes))
        .catch(err=>res.json(err))

}

//create jokes
module.exports.addJokes = (req, res) => {
    Jokes.create(req.body)
        .then(newJokes => res.json(newJokes))
        .catch(err=>res.json(err))
}

//update jokes
module.exports.updateJokes = (req, res) => {
    Jokes.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators:true}
    )
        .then(updatedJokes => res.json(updatedJokes))
        .catch(err=>res.json(err))
}

//delete jokes
module.exports.deleteJokes = (req, res) => {
    Jokes.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.json(err))

}
