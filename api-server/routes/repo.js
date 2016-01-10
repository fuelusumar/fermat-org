/*global require*/
/*global module*/
var express = require('express');
var passport = require('passport');
var router = express.Router();
var repMod = require('../modules/repository');
var Cache = require('../lib/route-cache');

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
/*router.put('/comps', function (req, res, next) {
    'use strict';
    try {
        repMod.updComps(req, function (error, result) {
            if (error) {
                res.status(200).send(error);
            } else {
                res.status(200).send(result);
            }
        });
    } catch (err) {
        next(err);
    }
});*/

/**
 * Gets components
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
/*router.post('/comps', function (req, res, next) {
    'use strict';
    try {
        repMod.loadComps(req, function (error, result) {
            if (error) {
                res.status(200).send(error);
            } else {
                res.status(200).send(result);
            }
        });
    } catch (err) {
        next(err);
    }
});*/

/**
 * [description]
 *
 * @route
 *
 */
/*router.post('/devs', function (req, res, next) {
    'use strict';
    try {
        repMod.updDevs(req, function (error, result) {
            if (error) {
                res.status(200).send(error);
            } else {
                res.status(200).send(result);
            }
        });
    } catch (err) {
        next(err);
    }
});*/

/**
 * Gets the processes
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
 * Gets the repository Readme
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
 * Gets the documentation
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
 * [checkManifest description]
 *
 * @method checkManifest
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.checkManifest = function (req, next) {
    'use strict';
    try {
       
        loadMod.getManifestWithExt('xml', function (err_xml, res_xml) {
            if (err_xml) {
                next(err_xml, null);
            } else {
                try {
                    libxml.parseXml(res_xml);
                    console.log("bien");
                    return next(null, "FermatManifest Cool");
                } catch (e) {
                    console.log("error");
                    console.log(e);
                    return next(null, {"message": e.message, "location":e});
                }
                
            }
        });

    } catch (err) {
        next(err, null);
    }
}

module.exports = router;