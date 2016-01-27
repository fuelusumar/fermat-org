/*global require*/
/*global module*/
var express = require('express');
var router = express.Router();
var passport = require('passport');
var winston = require('winston');
var security = require('../../../lib/utils/security');
var repMod = require('../../../modules/repository');
var authMod = require('../../../modules/auth');
var Cache = require('../../../lib/route-cache');
var layerRout = require('./layer');
var suprlayRout = require('./suprlay');
var procRout = require('./proc');
var platfrmRout = require('./platfrm');
var compRout = require('./comp');

// creation of object cache
var cache = new Cache({
    type: 'file',
    time: 36000000
});
/**
 * [auth description]
 *
 * @method auth
 *
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
var auth = function (req, res, next) {
    // TODO: authentication
    req.body.usr_id = req.params.usr_id;
    next();
};
/**
 *
 */
router.use("/usrs/:usr_id/layers", auth, layerRout);
router.use("/usrs/:usr_id/suprlays", auth, suprlayRout);
router.use("/usrs/:usr_id/procs", auth, procRout);
router.use("/usrs/:usr_id/platfrms", auth, platfrmRout);
router.use("/usrs/:usr_id/comps", auth, compRout);

/**
 * [description]
 *
 * @method
 *
 * @param  {[type]} req   [description]
 * @param  {[type]} res   [description]
 * @param  {[type]} next  [description]
 *
 * @return {[type]} [description]
 */
router.get('/comps/reload', function (req, res, next) {
    'use strict';
    try {
        repMod.updBook(req, function (error, result) {
            if (error) {
                //res.status(200).send(error);
                winston.log('error', 'Error: ', error);
            } else {
                repMod.loadComps(req, function (error, res) {
                    if (error) {
                        winston.log('error', 'Error: ', error);
                    } else {
                        repMod.updComps(req, function (error, result) {
                            if (error) {
                                winston.log('error', 'Error: ', error);
                                //res.status(200).send(error);
                            } else {
                                //res.status(200).send(result);
                                winston.log('info', 'Success updating');
                            }
                        });
                    }
                });
            }
        });
        res.status(200).send({
            'message': 'Updated Database'
        });
    } catch (err) {
        next(err);
    }
});

/**
 * Get autorization for use the api
 * @param  {[type]} req   [description]
 * @param  {[type]} resp  [description]
 * @param  {[type]} next) [description]
 * @return {[type]}       [description]
 */
router.get('/getAutorization', function(req, resp, next) {
    'use strict';
    try {
        console.log("Get autorization");
        var code = req.query['code'];
        var api_key = req.query['api_key'];
        var url = "https://github.com/login/oauth/access_token?client_id=6cac9cc2c2cb584c5bf4&client_secret=4887bbc58790c7a242a8dafcb035c0a01dc2a199&" +
            "code=" + code;
        authMod.getAutorization(url, api_key, function(err_auth, res_auth) {
                if (err_auth) {
                    console.log("Error", err_auth);
                    resp.status(200).send(err_auth);
                } else {
                    console.log("Info", "Authorization granted");
                    resp.status(200).send(res_auth);
                }
            });
        } catch (err) {
            console.error("Error", err);
            next(err);
        }
    });
/**
 * [description]
 *
 * @route
 *
 */
router.get('/comps', function (req, res, next) {
    'use strict';
    try {
        //passport.authenticate('bearer', function (err, access, scope) {
        //if (access) {
        // we search for body in cache
        var body = cache.getBody(req);
        if (body) {
            // we send it
            res.status(200).send(body);
            repMod.getComps(req, function (error, result) {
                if (error) {
                    winston.log('error', 'Error: ', error);
                } else {
                    // we save it
                    cache.setBody(req, result);
                }
            });
        } else {
            // we create it
            repMod.getComps(req, function (error, result) {
                if (error) {
                    res.status(200).send(error);
                } else {
                    // we save it
                    cache.setBody(req, result);
                    res.status(200).send(result);
                }
            });
        }
        //} else {
        //res.status(401).send(null);
        //}
        //})(req, res, next);
    } catch (err) {
        next(err);
    }
});
/**
 * [description]
 *
 * @route
 *
 */
router.get('/devs', function (req, res, next) {
    'use strict';
    try {
        //passport.authenticate('bearer', function (err, access, scope) {
        //if (access) {
        // we search for body in cache
        var body = cache.getBody(req);
        if (body) {
            // we send it
            res.status(200).send(body);
            repMod.getDevs(req, function (error, result) {
                if (error) {
                    winston.log('error', 'Error: ', error);
                } else {
                    // we save it
                    cache.setBody(req, result);
                }
            });
        } else {
            // we create it
            repMod.getDevs(req, function (error, result) {
                if (error) {
                    res.status(200).send(error);
                } else {
                    // we save it
                    cache.setBody(req, result);
                    res.status(200).send(result);
                }
            });
        }
        //} else {
        //res.status(401).send(null);
        //}
        //})(req, res, next);
    } catch (err) {
        next(err);
    }
});
/**
 * [description]
 *
 * @method
 *
 * @param  {[type]} req   [description]
 * @param  {[type]} res   [description]
 * @param  {[type]} next  [description]
 *
 * @return {[type]} [description]
 */
router.get('/procs', function (req, res, next) {
    'use strict';
    try {
        // we search for body in cache
        var body = cache.getBody(req);
        if (body) {
            // we send it
            res.status(200).send(body);
            repMod.getProcs(req, function (error, result) {
                if (error) {
                    winston.log('error', 'Error: ', error);
                } else {
                    // we save it
                    cache.setBody(req, result);
                }
            });
        } else {
            // we create it
            repMod.getProcs(req, function (error, result) {
                if (error) {
                    res.status(200).send(error);
                } else {
                    // we save it
                    cache.setBody(req, result);
                    res.status(200).send(result);
                }
            });
        }
    } catch (err) {
        next(err);
    }
});
/**
 * [description]
 *
 * @method
 *
 * @param  {[type]} req   [description]
 * @param  {[type]} res   [description]
 * @param  {[type]} next  [description]
 *
 * @return {[type]} [description]
 */
router.get('/readme', function (req, res, next) {
    'use strict';
    try {
        repMod.getReadme(req, function (error, result) {
            if (error) {
                res.status(200).send(error);
            } else {
                res.status(200).send(result);
            }
        });
    } catch (err) {
        next(err);
    }
});
/**
 * [description]
 *
 * @method
 *
 * @param  {[type]} req   [description]
 * @param  {[type]} res   [description]
 * @param  {[type]} next  [description]
 *
 * @return {[type]} [description]
 */
router.get('/book', function (req, res, next) {
    'use strict';
    try {
        repMod.getBook(req, function (error, result) {
            if (error) {
                res.status(200).send(error);
            } else {
                res.status(200).send(result);
            }
        });
    } catch (err) {
        next(err);
    }
});
/**
 * [description]
 *
 * @method
 *
 * @param  {:type book, readme, paper
 * @param  {[type]} res   [description]
 * @param  {[type]} next  [description]
 *
 * @return {[type]} [description]
 */
router.get('/docs/:type', function (req, res, next) {
    'use strict';
    try {
        var type = req.param('type');
        var style = req.query.style;
        if (type !== 'book' && type !== 'readme' && type !== 'paper') {
            return res.status(422).send({
                message: 'Bad Parameters'
            });
        }
        if (typeof style != 'undefined' && style != 'big') {
            return res.status(422).send({
                message: 'Bad Parameters'
            });
        }
        repMod.getDocs(req, function (error, result) {
            if (error) {
                res.status(200).send(error);
            } else {
                res.sendfile(result.pdfFile);
            }
        });
    } catch (err) {
        next(err);
    }
});
/**
 * [description]
 *
 * @method
 *
 * @param  {:type book, readme, paper
 * @param  {[type]} res   [description]
 * @param  {[type]} next  [description]
 *
 * @return {[type]} [description]
 */
router.get('/manifest/check', function (req, res, next) {
    'use strict';
    try {
        // we create it
        repMod.checkManifest(req, function (error, result) {
            if (error) {
                res.status(200).send(error);
            } else {
                res.status(200).send(result);
            }
        });
    } catch (err) {
        next(err);
    }
});
//
module.exports = router;