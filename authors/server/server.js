//import all dependencies
const express = require("express");
const app = express();
const cors = require(`cors`)

require('dotenv').config();

require("./config/mongoose.config")



//configure express

app.use(cors())
app.use( express.json() );
app.use( express.urlencoded({ extended: true}) );


// routes
const Router = require("./routes/authors.route")
Router(app);


//Listen to Port
app.listen(8000, ()=>console.log(`Listening to the port: 8000`))