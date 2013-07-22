/**
 * Module dependencies.
 */

var express = require('express'), fs = require('fs'), mongoose = require('mongoose'),
    http = require('http'), path = require('path'), passport = require('passport');

// Bootstrap models
var models_path = __dirname + '/../models';
fs.readdirSync(models_path).forEach(function(file) {
    if (~file.indexOf('.js'))
        require(models_path + '/' + file);
});

var app = express();



module.exports = function (app, config) {

// all environments
app.set('views', __dirname + './../views');
app.set('view engine', 'jade');
// app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + './../public'));
app.use(express.static(path.join(__dirname, './../public')));
app.use(express.bodyParser({ keepExtensions: true, uploadDir: __dirname + "./../public/temp/" }))


    passport.serializeUser(function(user, done) {
    done(null, user.email);
});

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}



var user = require('../controllers/user'), signin = require('../controllers/signin'),
    template = require('../controllers/template');

app.get('/', signin.signin);
app.get('/users', user.list);
app.post('/upload', template.upload);
app.get('/template', template.template);



}
