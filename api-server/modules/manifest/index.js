var compMod = require('../repository/component');
var procMod = require('../repository/process');
var layMod = require('../repository/layer');
var suprlayMod = require('../repository/superlayer');
var platfrmMod = require('../repository/platform');


/**
 * @method addProc
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.addProc = function (req, next) {
	'use strict';
    try {
        procMod.insOrUpdProc(req.body.platfrm, req.body.name, req.body.desc, req.body.prev, req.body.next, function (err, res) {
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
 * @method listProcs
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.listProcs = function (req, next) {
	'use strict';
    try {
        procMod.getAllProces(function (err, res) {
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
 * @method addComp
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.addComp = function (req, next) {
	'use strict';
    try {
        compMod.insOrUpdComp(req.body.platfrm_id, req.body.suprlay_id, req.body.layer_id, req.body.name, req.body.type, req.body.description, req.body.difficulty, req.body.code_level, req.body.repo_dir, req.body.scrnshts, req.body.found, function (err, res) {
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
 * @method listComps
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.listComps = function (req, next) {
	'use strict';
    try {
        compMod.getComps(function (err, res) {
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
 * @method addLayer
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.addLayer = function (req, next) {
	'use strict';
    try {
        layMod.insOrUpdLayer(req.body.name, req.body.lang, req.body.suprlay, req.body.order, function (err, res) {
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
 * @method listLayers
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.listLayers = function (req, next) {
	'use strict';
    try {
        layMod.getLayers(function (err, res) {
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
 * @method addSuprLay
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.addSuprLay = function (req, next) {
	'use strict';
    try {
        suprlayMod.insOrUpdSuprlay(req.body.code, req.body.name, req.body.logo, req.body.deps, req.body.order, function (err, res) {
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
 * @method listSuprLays
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.listSuprLays = function (req, next) {
	'use strict';
    try {
        suprlayMod.getSuprlays(function (err, res) {
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
 * @method addPlatform
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.addPlatform = function (req, next) {
	'use strict';
    try {
        platfrmMod.insOrUpdPlatfrm(req.body.code, req.body.name, req.body.logo, req.body.deps, req.body.order, function (err, res) {
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
 * Add one or several life cicle to component
 * @method addLifeCiclesToComp
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.addLifeCiclesToComp = function (req, next) {


};

/**
 * @method addCompDev
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.addCompDev = function (req, next) {
	'use strict';
    try {
        compMod.insOrUpdCompDev(req.body.comp_id, req.body.dev_id, req.body.role, req.body.scope, req.body.percnt, function (err, res) {
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
 * @method addStep
 *
 * @param  {[type]}   req  [description]
 * @param  {Function} next [description]
 *
 * @return {[type]}   [description]
 */
exports.addStep = function (req, next) {
	'use strict';
    try {
        procMod.insOrUpdStep(req.body.proc_id, req.body.platfrm_code, req.body.suprlay_code, req.body.layer_name, req.body.comp_name, req.body.type, req.body.title, req.body.desc, req.body.order, next, function (err, res) {
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