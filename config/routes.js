/**
 * Controllers
 */

module.exports = function(app, config) {
	var users = require('../controllers/users'), home = require('../controllers/home'), template = require('../controllers/template'), passport = require('passport'), list = require('../controllers/list');

	app.get('/', users.login);
	app.get('/logout', users.logout);
	app.get('/template', template.template);
	app.get('/home/:name', home.home);
//	app.get('/file', file.index);
//	app.post('/upload', file.showUploadFiles, file.getFiles, file.index);
//	app.get('/download/:fileId', file.download);
//	app.get('/remove/:fileId', file.remove, file.getFiles, file.index);

	app.get('/auth/facebook', passport.authenticate('facebook', {
		scope : [ 'email', 'user_about_me' ],
		failureRedirect : '/'
	}), users.signin);

	app.get('/auth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect : '/'
	}), users.authCallback);

	app.get('/auth/twitter', passport.authenticate('twitter', {
		failureRedirect : '/'
	}), users.signin);

	app.get('/auth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect : '/'
	}), users.authCallback);
	
	app.get('/list/create', list.create);
	app.post('/list/upload', list.upload);

};


