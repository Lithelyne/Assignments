//1. Import dependencies
const express=require("express")
const app=express()
const { faker } = require('@faker-js/faker')

//class
class User {
    constructor(){
        this.password = faker.internet.password()
        this.email = faker.internet.email()
        this.phoneNumber = faker.phone.number()
        this.lastName = faker.person.lastName()
        this.firstName = faker.person.firstName()
        // this._id=_id
    }
}

class Company {
    constructor(){
        // this._id = _id        
        this.name = faker.company.name()
        this.address = {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        };
    }
}

//2. configure express
app.use( express.json ());
app.use ( express.urlencoded({extended: true}));

//3. define routes and logic
app.get("/api/testing", (req,res)=>{
    res.json({message: "Hello World"})
})

app.post("/api/users/new", (req, res) => {
    console.log('creating new user')
    const newUser = new User()
    res.json(newUser)
})

app.post("/api/company/new", (req, res) => {
    console.log('creating new company')
    const newCompany = new Company()
    res.json(newCompany)
})

//4. listen on the port
app.listen(8000,()=>console.log(`Listening on port:8000`))