var mongoose = require('mongoose');
var Dao = require('../../../database/dao');
var devMod = require('../../../repository/developer');
var UsrMdl = require('../models/usr');
var usrSch = require('../schemas/usr');

/**
 * [usrDao description]
 *
 * @type {Dao}
 */
var usrDao = new Dao('Usr', usrSch, UsrMdl);

/**
 * [insertUsrAndDev description]
 * @param  {[type]}   usr_Mdl  [description]
 * @param  {[type]}   dev_Mdl  [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.insertUsrAndDev = function (usr_Mdl, dev_Mdl, callback) {
    'use strict';
    usrDao.insertSchema(usr_Mdl, function (err, usr) {
        callback(err, usr);
    });
    devMod.insOrUpdDev(dev_Mdl.usrnm, dev_Mdl.email, dev_Mdl.name, dev_Mdl.bday, dev_Mdl.country,
    dev_Mdl.avatar_url, dev_Mdl.url, dev_Mdl.bio, function (err, dev) {
    	callback(err, dev);
    });
};

/**
 * [findUsrById description]
 * @param  {[type]}   _id      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.findUsrById = function (_id, callback) {
    'use strict';
    usrDao.findSchemaById(_id, function (err, usr) {
        callback(err, usr);
    });
};

/**
 * [findUsrByEmail description]
 * @param  {[type]}   email    [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.findUsrByEmail = function (email, callback) {
    'use strict';
    usrDao.findSchema({
        email: email
    }, function (err, usr) {
        callback(err, usr);
    });
};

/**
 * [findUsrByUsrnm description]
 * @param  {[type]}   usrnm    [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.findUsrByUsrnm = function (usrnm, callback) {
    'use strict';
    usrDao.findSchema({
        usrnm: usrnm
    }, function (err, usr) {
        callback(err, usr);
    });
};

/**
 * [findUsers description]
 * @param  {[type]}   query    [description]
 * @param  {[type]}   limit    [description]
 * @param  {[type]}   order    [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.findUsers = function (query, limit, order, callback) {
    'use strict';
    usrDao.findSchemaLst(query, limit, order, function (err, usr) {
        callback(err, usr);
    });
};

/**
 * [findAllUsers description]
 * @param  {[type]}   query    [description]
 * @param  {[type]}   order    [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.findAllUsers = function (query, order, callback) {
    'use strict';
    usrDao.findAllSchemaLst(query, order, function (err, usr) {
        callback(err, usr);
    });
};

/**
 * [updateUsrById description]
 * @param  {[type]}   _id      [description]
 * @param  {[type]}   set      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.updateUsrById = function (_id, set, callback) {
    'use strict';
    set.upd_at = new mongoose.Types.ObjectId();
    usrDao.updateSchema({
        _id: _id
    }, set, {}, function (err, usr) {
        callback(err, usr);
    });
};

/**
 * [delAllUsers description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.delAllUsers = function (callback) {
    'use strict';
    usrDao.delAllSchemas(function (err, usr) {
        callback(err, usr);
    });
};