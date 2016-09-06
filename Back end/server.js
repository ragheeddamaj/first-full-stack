var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT  || 8080;
var propertyRouter = require('./src/Routers/router');


var app = express();
app.use(bodyParser.json());
app.use("/property", propertyRouter );

app.use(express.static("../Front-end"));



mongoose.connect("mongodb://localhost/property",function(){
    console.log("Server is successfuly connected to the DataBase");
});




app.listen(port , function(){
    console.log("My server is running")
});
