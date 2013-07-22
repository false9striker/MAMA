


/**
 * Module dependencies.
 */

var express = require('express')
    , fs = require('fs')
    , passport = require('passport')

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load configurations
// if test env, load example file
var env = process.env.NODE_ENV || 'development'
    , config = require('./config/config')[env]
    , mongoose = require('mongoose')

// Bootstrap db connection
mongoose.connect(config.db)

// Bootstrap models
var models_path = __dirname + '/models'
fs.readdirSync(models_path).forEach(function (file) {
    if (~file.indexOf('.js')) require(models_path + '/' + file)
})


var app = express()
// express settings
var express = require('./config/express')  ;
express(app,config);



// Start the app by listening on <port>
var port = process.env.PORT || 3000
app.listen(port)
console.log('Express app started on port '+port)

// expose app
exports = module.exports = app
