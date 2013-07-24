var url = require("url")

exports.home = function (req, res) {
	res.render('home', {
		userEmail: req.params.name
	});
};