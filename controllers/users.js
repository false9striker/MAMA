/**
 * Module dependencies.
 */

var mongoose = require('mongoose'), User = mongoose.model('User')

exports.signin = function(req, res) {
}

/**
 * Auth callback
 */

exports.authCallback = function(req, res, next) {
	console.log(req);
	var user = req.user;
	//Twitter
	if (user.twitter) {
		res.redirect('/home/' + user.twitter.screen_name);

	}//LinkedIn
	else if(user._id){
		res.redirect('/home/' + user._id);
	} else if (user.facebook) {
		res.redirect('/home/' + user.facebook.username);
	}
	//if nothing works redirect to home page
	else
		res.redirect('/');
	// TODO: Other strategies should check what is the output from the console.log
	// in the first line and

}

/**
 * Show login form
 */

exports.login = function(req, res) {
	res.render('login', {
		title : 'Login',
		message : req.flash('error'),
		req: req
	})
}

/**
 * Show sign up form
 */

exports.signup = function(req, res) {
	res.render('users/signup', {
		title : 'Sign up',
		user : new User()
	})
}

/**
 * Logout
 */

exports.logout = function(req, res) {
	req.logout()
	res.redirect('/')
}

/**
 * Session
 */

exports.session = function(req, res) {
	res.redirect('/')
}

/**
 * Create user
 */

/*
 * exports.create = function (req, res) { var user = new User(req.body)
 * user.provider = 'local' user.save(function (err) { if (err) { return
 * res.render('users/signup', { errors: err.errors, user: user, title: 'Sign up' }) } //
 * manually login the user once successfully signed up req.logIn(user,
 * function(err) { if (err) return next(err) return res.redirect('/') }) }) }
 */

/**
 * Show profile
 */

exports.show = function(req, res) {
	var user = req.profile
	res.render('users/show', {
		title : user.name,
		user : user
	})
}

/**
 * Find user by id
 */

exports.user = function(req, res, next, id) {
	User.findOne({
		_id : id
	}).exec(function(err, user) {
		if (err)
			return next(err)
		if (!user)
			return next(new Error('Failed to load User ' + id))
		req.profile = user
		next()
	})
}
