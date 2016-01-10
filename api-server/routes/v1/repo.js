/*global require*/
/*global module*/
var express = require('express');
var passport = require('passport');
var winston = require('winston');
var router = express.Router();
var repMod = require('../../modules/repository');
var Cache = require('../../lib/route-cache');
// creation of object cache
var cache = new Cache({
    type: 'file',
    time: 36000000
});
/**
 * [description]
 *
 * @route
 *
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

module.exports = router;