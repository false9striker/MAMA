/**
 * New node file for User
 */

var mongoose = require('mongoose'), Schema = mongoose.Schema

var UserSchema = new Schema({
	firstname : { type: String, default: '' },
	lastname : { type: String, default: '' },
	email : { type: String, default: '' },
	password : { type: String, default: '' },
	provider: { type: String, default: '' },
	facebook: {},
  twitter: {},
  github: {},
  google: {}
	
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