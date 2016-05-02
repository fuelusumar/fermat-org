var mongoose = require('mongoose');
/**
 * [UsrPermMdl description]
 * @param {[type]} _master_id  [description]
 * @param {[type]} _granted_id [description]
 */
function UsrPermMdl(_master_id, _granted_id) {
	this._master_id = _master_id;
	this._granted_id = _granted_id;
	this.upd_at = new mongoose.Types.ObjectId();
}
/**
 * [init description]
 * @param  {[type]} usrPermSchema [description]
 * @return {[type]}               [description]
 */
UsrPermMdl.prototype.init = function (usrPermSchema) {
	this._master_id = usrPermSchema._master_id;
	this._granted_id = usrPermSchema._granted_id;
	this.upd_at = usrPermSchema.upd_at;
};
/**
 * [setUpdate description]
 */
UsrPermMdl.prototype.setUpdate = function () {
	this.upd_at = new mongoose.Types.ObjectId();
};
// export the class
module.exports = UsrPermMdl;