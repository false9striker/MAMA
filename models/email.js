/**
 * Email 
 */

var mongoose = require('mongoose'), Schema = mongoose.Schema

var EmailIdSchema = new Schema({
	emailId : String
});

mongoose.model('EmailId', EmailIdSchema);