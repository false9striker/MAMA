/**
 * New node file
 */

var mongoose = require('mongoose'), User = mongoose.model('User');

exports.signin = function(req, res) {
	res.render('signin', {
		project_name : 'MAMA'
	});
};
