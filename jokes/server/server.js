//import all dependencies
const express = require("express");
const app = express();
require('dotenv').config();

require("./config/mongoose.config")



//configure express
app.use( express.json() );
app.use( express.urlencoded({ extended: true}) );


//routes
const Router = require("./routes/jokes.routes")
Router(app);


//Listen to Port
app.listen(8000, ()=>console.log(`Listening to the port: 8000`))


