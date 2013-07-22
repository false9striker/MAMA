/**
 * Created with JetBrains WebStorm.
 * User: Thanneer
 * Date: 7/22/13
 * Time: 8:31 PM
 * To change this template use File | Settings | File Templates.
 */


var path = require('path'),
    fs = require('fs');



exports.template = function(req, res) {
    res.render('template');
};

exports.upload = function(req, res){
    /** uplaod new html template*/
    var tempPath = req.files.file.path,
        targetPath =tempPath+'/userAccnNumber/';

    console.log("temp " + tempPath) ;
    console.log("target " + targetPath) ;

    if (path.extname(req.files.file.name).toLowerCase() === '.png') {


        fs.rename(tempPath, targetPath, function(err) {
            if (err) throw err;
            console.log("Upload completed!");
        });
    } else {
        fs.unlink(tempPath, function () {
            console.error("Only .png files are allowed!");
        });
    }
    // ...
};

