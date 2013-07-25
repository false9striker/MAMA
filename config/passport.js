/**
 * Config file for passport.js
 */

var mongoose = require('mongoose'), TwitterStrategy = require('passport-twitter').Strategy, FacebookStrategy = require('passport-facebook').Strategy, LinkedInStrategy = require('passport-linkedin').Strategy, User = mongoose
		.model('User');

module.exports = function(passport, config) {
	// require('./initializer')

	// serialize sessions
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findOne({
			_id : id
		}, function(err, user) {
			done(err, user);
		});
	});

	// use twitter strategy
	passport.use(new TwitterStrategy({
		consumerKey : config.twitter.clientID,
		consumerSecret : config.twitter.clientSecret,
		callbackURL : config.twitter.callbackURL
	}, function(token, tokenSecret, profile, done) {
		User.findOne({
			'twitter.id' : profile.id
		}, function(err, user) {
			if (err) {
				return done(err);
			}
			if (!user) {
				user = new User({
					name : profile.displayName,
					username : profile.username,
					provider : 'twitter',
					twitter : profile._json
				});
				user.save(function(err) {
					if (err)
						console.log(err);
					return done(err, user);
				});
			} else {
				return done(err, user);
			}
		});
	}));
	
	//use linkedin strategy
	
	passport.use(new LinkedInStrategy({
		consumerKey : config.linkedin.clientID,
		consumerSecret : config.linkedin.clientSecret,
		callbackURL : config.linkedin.callbackURL
	}, function(token, tokenSecret, profile, done) {
		User.findOne({
			'linkedin.id' : profile.id
		}, function(err, user) {
			if (err) {
				return done(err);
			}
			if (!user) {
				user = new User({
					name : profile.displayName,
					username : profile.username,
					provider : 'linkedin',
					linkedin : profile._json
				});
				user.save(function(err) {
					if (err)
						console.log(err);
					return done(err, user);
				});
			} else {
				return done(err, user);
			}
		});
	}));
	
	/*passport.use(new LinkedInStrategy({
		consumerKey : config.linkedin.clientID,
		consumerSecret : config.linkedin.clientSecret,
		callbackURL : config.linkedin.callbackURL
	}, function(token, tokenSecret, profile, done) {
		User.findOrCreate({
			linkedinId : profile.id
		}, function(err, user) {
			return done(err, user);
		});
	}));*/
	

	// use facebook strategy
	passport.use(new FacebookStrategy({
		clientID : config.facebook.clientID,
		clientSecret : config.facebook.clientSecret,
		callbackURL : config.facebook.callbackURL
	}, function(accessToken, refreshToken, profile, done) {
		User.findOne({
			'facebook.id' : profile.id
		}, function(err, user) {
			if (err) {
				return done(err);
			}
			if (!user) {
				user = new User({
					name : profile.displayName,
					email : profile.emails[0].value,
					username : profile.username,
					provider : 'facebook',
					facebook : profile._json
				});
				user.save(function(err) {
					if (err)
						console.log(err);
					return done(err, user);
				});
			} else {
				return done(err, user);
			}
		});
	}));
};