/**
 * Controllers
 */

module.exports = function(app, config) {
	var users = require('../controllers/users'), home = require('../controllers/home'), template = require('../controllers/template'), passport = require('passport'), list = require('../controllers/list'), unsubscribe = require('../controllers/unsubscribe');

	app.get('/', users.login);
	app.get('/logout', users.logout);
	app.get('/template', template.template);
	app.get('/home/:name', home.home);
	//unsubscribe page config
	app.get('/unsubscribe', unsubscribe.unsubscribe);
	app.post('/unsubscribe/removeMe', unsubscribe.removeMe);
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
	
	//Google route
	
	app.get('/auth/google', passport.authenticate('google', {scope: 'https://www.google.com/m8/feeds'} , { failureRedirect : '/'	}), users.signin);

	app.get('/auth/google/callback', passport.authenticate('google', {
		failureRedirect : '/'
	}), users.authCallback);
	
	// Github route
	
	app.get('/auth/github', passport.authenticate('github', {
		failureRedirect : '/'
	}), users.signin);

	app.get('/auth/github/callback', passport.authenticate('github', {
		failureRedirect : '/'
	}), users.authCallback);

	//
	
	app.get('/auth/linkedin', passport.authenticate('linkedin', {
		failureRedirect : '/'
	}), users.signin);
	
	app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
		failureRedirect : '/'
	}), users.authCallback);

	app.get('/list/create', list.create);
	app.post('/list/upload', list.upload);
};


