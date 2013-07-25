/**
 * New node file
 */

var mongoose = require('mongoose'), EmailId = mongoose.model('EmailId'), csv = require('ya-csv');

exports.create = function(req, res) {
	res.render('upload', {});
};

exports.upload = function(req, res) {
	var reader = csv.createCsvFileReader(req.files.groupfile.path, {
		'separator' : ',',
		'quote' : '"',
		'escape' : '"',
		'comment' : ''
	});
	reader.addListener('data', function(data) {
		for(var i=0; i<data.length; i++){
			var id = new EmailId({
				emailId : data[i]
			});
			id.save(function(err, res) {
				if (err) {
					
				} else {

				}
			});
		}
	});

	res.render('upload', {});
}