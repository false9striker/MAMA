

/**
 * Controllers
 */


module.exports = function (app, config) {
    var user = require('../controllers/user'), signin = require('../controllers/signin'),
        template = require('../controllers/template');

    app.get('/', signin.signin);
    app.get('/users', user.list);
    app.get('/template', template.template);



}


