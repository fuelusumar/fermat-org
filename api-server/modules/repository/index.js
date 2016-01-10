var libxml = require('libxmljs');
var procMod = require('./process');
var compMod = require('./component');
var layerMod = require('./layer');
var suprlayMod = require('./superlayer');
var platfrmMod = require('./platform');
var docMod = require('./doc');
var devMod = require('./developer');
var loadMod = require('./lib/loader');
var syncMod = require('./lib/syncer');

/**
 * Get all components
 * @method getComps
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.getComps = function (req, next) {
    'use strict';
    try {
        var res = {};
        platfrmMod.getPlatfrms(function (err, platfrms) {
            if (err) {
                next(err, null);
            } else {
                res.platfrms = platfrms;
                suprlayMod.getSuprlays(function (err, suprlays) {
                    if (err) {
                        next(err, null);
                    } else {
                        res.suprlays = suprlays;
                        layerMod.getLayers(function (err, layers) {
                            if (err) {
                                next(err, null);
                            } else {
                                res.layers = layers;
                                compMod.getComps(function (err, comps) {
                                    if (err) {
                                        next(err, null);
                                    } else {
                                        res.comps = comps;
                                        next(null, res);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    } catch (err) {
        next(err, null);
    }
};

/**
 * Function to List Process filter by   
 * 
 * @method getProcs
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.getProcs = function (req, next) {
    'use strict';
    try {
        var platfrm_code;
        if ((req.query.platform || req.query.superlayer) && req.query.layer && req.query.component) {
            platfrm_code = req.query.platform ? req.query.platform.toUpperCase() : null;
            var suprlay_code = req.query.superlayer ? req.query.superlayer.toUpperCase() : null,
                layer_name = req.query.layer ? req.query.layer.toLowerCase() : null,
                comp_name = req.query.component ? req.query.component.toLowerCase() : null;
            procMod.findProcsByComp(platfrm_code,
                suprlay_code,
                layer_name,
                comp_name,
                function (err, res) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, res);
                    }
                });
        } else if (req.query.platform && req.query.name) {
            platfrm_code = req.query.platform ? req.query.platform.toUpperCase() : null;
            var name = req.query.name ? req.query.name.toLowerCase() : null;
            procMod.findStepsByProc(platfrm_code, name, function (err, res) {
                if (err) {
                    next(err, null);
                } else {
                    next(null, res);
                }
            });
        } else {

            procMod.getAllProces(function (err, res) {
                if (err) {
                    next(err, null);
                } else {
                    next(null, res);
                }
            });
        }
    } catch (err) {
        next(err, null);
    }
};

/**
 * Gets the repository Readme
 * @method getReadme
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.getReadme = function (req, next) {
    'use strict';
    try {
        docMod.getReadme(function (err, res) {
            if (err) {
                next(err, null);
            } else {
                next(null, res);
            }
        });
    } catch (err) {
        next(err, null);
    }
};

/**
 * Gets the documentation repository
 * @method getBook
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.getBook = function (req, next) {
    'use strict';
    try {
        docMod.getBook(function (err, res) {
            if (err) {
                next(err, null);
            } else {
                next(null, res);
            }
        });
    } catch (err) {
        next(err, null);
    }
};

/**
 * Gets the documentation given a specific type
 *
 * @method getBook
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.getDocs = function (req, next) {
    'use strict';
    try {
        var type = req.param('type');
        var style = req.query.style;

        if (type == 'book') {

            docMod.getBookPdf(style, function (err, res) {
                if (err) {
                    next(err, null);
                } else {
                    next(null, res);
                }
            });

        } else if (type == 'readme') {
            docMod.getReadmePdf(style, function (err, res) {
                if (err) {
                    next(err, null);
                } else {
                    next(null, res);
                }
            });

        } else if (type == 'paper') {
            docMod.getPaperPdf(style, function (err, res) {
                if (err) {
                    next(err, null);
                } else {
                    next(null, res);
                }
            });
        }

    } catch (err) {
        next(err, null);
    }
};

/**
 * [getDevs description]
 *
 * @method getDevs
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.getDevs = function (req, next) {
    'use strict';
    try {
        devMod.getDevs(function (err, res) {
            if (err) {
                next(err, null);
            } else {
                next(null, res);
            }
        });
    } catch (err) {
        next(err, null);
    }
}

/**
 * [loadComps description]
 *
 * @method loadComps
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.loadComps = function (req, next) {
    'use strict';
    try {
        loadMod.loadComps(function (err, res) {
            if (err) {
                next(err, null);
            } else {
                next(null, res);
            }
        });
    } catch (err) {
        next(err, null);
    }
}

/**
 * [updComps description]
 *
 * @method updComps
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.updComps = function (req, next) {
    'use strict';
    try {
        loadMod.updComps(function (err, res) {
            if (err) {
                next(err, null);
            } else {
                next(null, res);
            }
        });
    } catch (err) {
        next(err, null);
    }
}

/**
 * [updBook description]
 *
 * @method updBook
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.updBook = function (req, next) {
    'use strict';
    try {
        syncMod.getBook(function (err, res) {
            if (err) {
                next(err, null);
            } else {
                next(null, res);
            }
        });
    } catch (err) {
        next(err, null);
    }
}

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

        loadMod.getManifestWithExt('xsd', function (err_xsd, res_xsd) {

            if (err_xsd) {
                    next(err_xsd, null);
            } else {

                try {

                    var xsdDoc = libxml.parseXml(res_xsd);
                    loadMod.getManifestWithExt('xml', function (err_xml, res_xml) {
                        if (err_xml) {
                            next(err_xml, null);
                        } else {
                            try {
                                var xmlDoc = libxml.parseXml(res_xml);
                                xmlDoc.validate(xsdDoc)
                                if(xmlDoc.validationErrors.length>0){
                                    return next(null, xmlDoc.validationErrors);
                                }
                                return next(null, "FermatManifest Cool");
                            } catch (e) {
                                return next(null, {"message": e.message, "location":e});
                            }
                            
                        }
                    });
                        
                } catch (e) {
                    return next(null, {"message": e.message, "location":e});
                }
                    
            }
        });

    } catch (err) {
        next(err, null);
    }
}