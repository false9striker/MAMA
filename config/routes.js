

/**
 * Controllers
 */


module.exports = function (app, config) {
    var user = require('../controllers/user'), signin = require('../controllers/signin'),
        template = require('../controllers/template');

    var file = require('../controllers/file')(config.db);

    app.get('/', signin.signin);
    app.get('/users', user.list);
    app.get('/template', template.template);

    app.get('/file',  file.index);
    app.post('/upload',file.showUploadFiles, file.getFiles, file.index);
    app.get('/download/:fileId',file.download);
    app.get('/remove/:fileId',file.remove, file.getFiles, file.index);



}
/**
 * Route middlewares
 */

