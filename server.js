var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt	= require('jsonwebtoken');


//set up express app
var app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/studenthack');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extented:true}));
app.use(bodyParser.json());
app.use('/api',require('./routes/api'));
app.use('/login',require('./routes/login'));

//listen for request
app.listen(process.env.port || 4000,function(){
	console.log('sekarang nunggu request');
});