/**
 * Module dependencies.
 */

var express = require('express'), fs = require('fs'), mongoose = require('mongoose'),
    http = require('http'), path = require('path'),flash = require('connect-flash'),  passport = require('passport');

// Bootstrap models
var models_path = __dirname + '/../models';
fs.readdirSync(models_path).forEach(function(file) {
    if (~file.indexOf('.js'))
        require(models_path + '/' + file);
});


module.exports = function (app, config) {

// set views path, template engine and default layout
app.set('views', config.root + '/views')
app.set('view engine', 'jade')



// app.use(express.favicon());
app.use(express.logger('dev'));
// cookieParser should be above session
app.use(express.cookieParser())

// bodyParser should be above methodOverride
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(express.session({
	secret : 'keyboard cat'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// should be declared after session and flash
//app.use(helpers(pkg.name))
app.use(app.router);
app.use(require('stylus').middleware(__dirname + './../public'));
app.use(express.static(path.join(__dirname, './../public')));
app.use(express.bodyParser({ keepExtensions: true, uploadDir: __dirname + "./../public/temp/" }));


    passport.serializeUser(function(user, done) {
    done(null, user.email);
});

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

 var route= require('./routes')(app,config);


}
