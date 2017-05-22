var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.get('/users',function(req,res,next){
	User.find({}).then(function(user){
		res.send(user);
	})
});

router.post('/users',function(req,res){
	User.create(req.body).then(function(user){
		res.send(user);
	});
});

router.post('/login',function(req,res){
	var username = req.body.username;
	var password = req.body.password;

	User.findOne({username: username,password:password},function(err,user){
		if(err){
			console.log("error");
			res.status(500).send();
		}
		if(!user){
			return res.status(404).send();
		}
		return res.status(200).send(user);
	});
});
router.post('/register',function(req,res){
	User.create(req.body).then(function(user){
		res.status(200).send(user);
	});
});
router.put('/users/:id',function(req,res,next){
	res.send({type:'PUT'});
});
router.delete('/users/:id',function(req,res,next){
	res.send({type:'DELETE'});
});



module.exports = router;