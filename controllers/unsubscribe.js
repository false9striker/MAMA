var url = require('url');

exports.unsubscribe = function(req, res) {
	res.render('unsubscribe', {username : 'nit'});
};

exports.removeMe = function(req, res) {
	var jsonData = JSON.parse(req.body.mydata);
	console.log(jsonData.userId, jsonData.irrelevant, jsonData.frequent, jsonData.other, jsonData.comments);
	
	res.render('unsubscribe',{respMessage : "You have successfully unsubscribed from our mailing list, You can always enable notifications in users settings page."});
};