var express = require('express');
var router = express.Router();
var User = require('../models/user');
var crypto = require('crypto');


router.get('/users',function(req,res,next){
	User.find({}).then(function(user){
		res.send(user);
	})
});

router.post('/register',function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	var password_confirm = req.body.password_confirm;
	if (password != password_confirm){
		res.status(406).json({message:"password tidak sama"});
	}else{
		User.create({username: username,password:crypto.createHash('sha256').update(password).digest("hex")}).then(function(){
			console.log("Regis User complete");
			res.status(200).json({message:"register selesai"});
		}).catch(function(err){
			res.status(400).json({message:"register gagal"});
			console.log(err);
		})
	}


});


router.post('/login',function(req,res){
	var username = req.body.username;
	var password = req.body.password;

	User.findOne({username: username,password:crypto.createHash('sha256').update(password).digest("hex")},function(err,user){
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