const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user Schema & model
const UserSchema = new Schema({
	username:{
		type: String,
		required:[true,'username field is required']
	},
	password:{
		type: String,
		required:[true,'butuh banget diisi']
	},
	login_type:{
		type: Number
	},
	status_user:{
		type: Boolean,
		default: false
	}
});

const User = mongoose.model('users',UserSchema);

module.exports = User;