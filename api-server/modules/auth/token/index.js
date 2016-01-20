var mongoose = require('mongoose');
var tokenSrv = require('./services/tkn');
var tokenMdl = require('./models/tkn');

/**
 * [insTokenApp description]
 * @param  {[type]}   _usr_id  [description]
 * @param  {[type]}   _app_id  [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.insToken = function(_usr_id, _app_id, callback) {
	'use strict';
	try {
		var token = new tokenMdl(_usr_id, _app_id);
		tokenSrv.insertToken(token, function(err_ins, res_ins) {
			if (err_ins) {
				return callback(err_ins, null);
			}
			return callback(null, res_ins);
		});
	} catch (err) {
		return callback(err, null);
	}
};

/**
 * [updateToken description]
 * @param  {[type]}   axs_key  [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.updateToken = function(axs_key, callback) {
	'use strict';
	try {
		tokenSrv.findTokenByAxsKey(axs_key, function(err_token, res_token) {
			if (err_token) {
				return callback(err_token, null);
			}
			if (res_token) {
				var set_obj = {};
				set_obj.upd_at = new mongoose.Types.ObjectId();
				if (Object.keys(set_obj).length > 0) {
					tokenSrv.updateTokenByAxsKey(res_token.axs_key, set_obj, function(err_upd, res_upd) {
						if (err_upd) {
							return callback(err_upd, null);
						}
						return callback(null, res_upd);
					});
				}
			} else return callback(null, res_token);
		});
	} catch (err) {
		return callback(err, null);
	}
};
/**
 * [getTokens description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.getListTokens = function(callback) {
	'use strict';
	try {
		tokenSrv.findAllTokens({}, {}, function(err, tokens) {
			if (err) {
				return callback(err, null);
			}
			return callback(null, tokens);
		});
	} catch (err) {
		return callback(err, null);
	}
};

/**
 * [getToken description]
 * @param  {[type]}   axs_key  [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.getToken = function(axs_key, callback) {
	'use strict';
	try {
		tokenSrv.findTokenByAxsKey(axs_key, function(err, token) {
			if (err) {
				return callback(err, null);
			}
			return callback(null, token);
		});
	} catch (err) {
		return callback(err, null);
	}
};