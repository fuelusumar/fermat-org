var mongoose = require('mongoose');
/**
 * [usrPermSchema description]
 * @type {[type]}
 */
var usrPermSchema = mongoose.Schema({
    _master_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usr'
    },
    _granted_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usr'
    },
    upd_at: {
        type: mongoose.Schema.Types.ObjectId,
        'default': new mongoose.Types.ObjectId()
    }
}, {
    collection: 'usrs_perm'
});

usrPermSchema.index({
    _master_id: 1,
    _granted_id: 1
}, {
    name: "master_granted_indx"
}); 
module.exports = usrPermSchema;