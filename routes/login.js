var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/login',function(req,res){
	var username = req.body.username;
	var password = req.body.password;

	User.findOne({username: username,password:password},function(err,user){
		if(err){
			console.log("error");
			res.status(500).send();
		}
		if (user.status_user == false){
			return res.status(800).send("belom di accept bro");
		}
		if(!user){
			return res.status(404).send();
		}
		return res.status(200).send(user);
	});
});

module.exports = router;