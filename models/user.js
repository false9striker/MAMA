/**
 * New node file for User
 */

var mongoose = require('mongoose'), Schema = mongoose.Schema

var UserSchema = new Schema({
	firstname : String,
	lastname : String,
	email : String,
	password : String
});

UserSchema.methods = {
	authenticate : function(plainText) {
		return this.password === plainText;
	}
};

UserSchema.statics.findByEmail = function(emailStr, cb) {
	this.find({
		email : emailStr
	}, cb);
}

mongoose.model('User', UserSchema);