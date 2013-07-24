/**
 * New node file for User
 */

var mongoose = require('mongoose'), Schema = mongoose.Schema

var EmailTemplate = new Schema({
	name : String,
	url : String,
	userId : String,
    _id: mongoose.Schema.Types.ObjectId
});


EmailTemplate.statics.findByName = function(name, cb) {
	this.find({
		name : name
	}, cb);
}

/**
 * Find email template by id
 *
 * @param {ObjectId} id
 * @param {Function} cb
 * @api private
 */

EmailTemplate.statics.findById =  function (id, cb) {
    this.findOne({ _id : id },cb);

}

EmailTemplate.statics.findAll =  function (cb) {
    this.find(cb);
}

EmailTemplate.statics.save =  function (cb) {
    this.find(cb);
}

mongoose.model('emailTemplate', EmailTemplate);