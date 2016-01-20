var mongoose = require('mongoose');
var Dao = require('../../../database/dao');
var TknMdl = require('../models/tkn');
var tknSch = require('../schemas/tkn');
var AppMdl = require('../../app/models/app');
var appSch = require('../../app/schemas/app');
var UsrMdl = require('../../user/models/usr');
var usrSch = require('../../user/schemas/usr');
/**
 * [compDao description]
 *
 * @type {Dao}
 */
var tknDao = new Dao('Tkn', tknSch, TknMdl, 'App', appSch, AppMdl, 'Usr', usrSch, UsrMdl);

/**
 * [insertToken description]
 * @param  {[type]}   TknMdl   [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.insertToken = function(TknMdl, callback) {
	'use strict';
	tknDao.insertSchema(TknMdl, function(err, token) {
		callback(err, token);
	});
};
/**
 * [updateTokenByAxsKey description]
 * @param  {[type]}   axs_key  [description]
 * @param  {[type]}   set      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.updateTokenByAxsKey = function(axs_key, set, callback) {
	'use strict';
	set.upd_at = new mongoose.Types.ObjectId();
	tknDao.updateSchema({
		axs_key: axs_key
	}, set, {}, function(err, token) {
		callback(err, token);
	});
};

/**
 * [findTokenByAxsKey description]
 * @param  {[type]}   axs_key  [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.findTokenByAxsKey = function(axs_key, callback) {
	'use strict';
	tknDao.findAndPopulateSchema({
		'axs_key': axs_key
	}, '_usr_id _app_id', function(err, token) {
		callback(err, token);
	});
}

/**
 * [findAllTokens description]
 * @param  {[type]}   query    [description]
 * @param  {[type]}   order    [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.findAllTokens = function(query, order, callback) {
	'use strict';
	tknDao.findAndPopulateAllSchemaLst(query, order, '_usr_id _app_id', function(err, token) {
		callback(err, token);
	});
};