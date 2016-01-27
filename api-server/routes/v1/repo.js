/*global require*/
/*global module*/
var request = require('request');
var express = require('express');
var passport = require('passport');
var winston = require('winston');
var security = require('../../lib/utils/security');
var router = express.Router();
var repMod = require('../../modules/repository');
var authMod = require('../../modules/auth');
var Cache = require('../../lib/route-cache');
var mongoose = require('mongoose');
// creation of object cache
var cache = new Cache({
    type: 'file',
    time: 36000000
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
router.post('/usr/:usr_id/procs', function (req, res, next) {
    'use strict';
    try {
            if (!security.isValidData(req.body.platfrm) ||
            !security.isValidData(req.body.name) ||
            !security.isValidData(req.body.desc) ||
            !security.isValidData(req.body.prev) ||
            !security.isValidData(req.body.next)) {
                res.status(412).send('missing or invalid data');
            } else {

                repMod.addProc(req, function (error, result) {
                    if (error) {
                        res.status(200).send(error);
                    } else {
                        res.status(200).send(result);
                    }
                });
            }
    }catch (err) {
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
router.get('/usr/:usr_id/simple-procs', function (req, res, next) {
    'use strict';
    try {
        repMod.listProcs(req, function (error, result) {
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
router.post('/usrs/:usr_id/comps', function (req, res, next) {
    'use strict';
    try {

    	if (!security.isValidData(req.body.platfrm_id) ||
            !security.isValidData(req.body.suprlay_id) ||
            !security.isValidData(req.body.layer_id) ||
            !security.isValidData(req.body.name) ||
            !security.isValidData(req.body.type) ||
            !security.isValidData(req.body.description) ||
            !security.isValidData(req.body.difficulty) ||
            !security.isValidData(req.body.code_level)||
            !security.isValidData(req.body.repo_dir) ||
            !security.isValidData(req.body.scrnshts) ||
            !security.isValidData(req.body.found)) {
                res.status(412).send('missing or invalid data');
            } else {

                    repMod.addComp(req, function (error, result) {
                        if (error) {
                            res.status(200).send(error);
                        } else {
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
router.get('/usrs/:usr_id/simple-comps', function (req, res, next) {
    'use strict';
    try {
        repMod.listComps(req, function (error, result) {
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
router.post('/usrs/:usr_id/layers', function (req, res, next) {
    'use strict';
    try {

          if (!security.isValidData(req.body.name) ||
              !security.isValidData(req.body.lang) ||
              !security.isValidData(req.body.suprlay) ||
              !security.isValidData(req.body.order)) {
                res.status(412).send('missing or invalid data');
            } else {
                repMod.addLayer(req, function (error, result) {
                    if (error) {
                        res.status(200).send(error);
                    } else {
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
router.get('/usrs/:usr_id/layers', function (req, res, next) {
    'use strict';
    try {
        repMod.listLayers(req, function (error, result) {
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
router.post('/usrs/:usr_id/suprlays', function (req, res, next) {
    'use strict';
    try {

        if (!security.isValidData(req.body.code) ||
              !security.isValidData(req.body.name) ||
              !security.isValidData(req.body.logo) ||
              !security.isValidData(req.body.deps) ||
              !security.isValidData(req.body.order)) {
                res.status(412).send('missing or invalid data');
        } else {
            repMod.addSuprLay(req, function (error, result) {
                if (error) {
                    res.status(200).send(error);
                } else {
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
router.get('/usrs/:usr_id/suprlays', function (req, res, next) {
    'use strict';
    try {
        repMod.listSuprLays(req, function (error, result) {
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
router.post('/usrs/:usr_id/platforms', function (req, res, next) {
    'use strict';
    try {

        if (!security.isValidData(req.body.code) ||
            !security.isValidData(req.body.name) ||
            !security.isValidData(req.body.logo) ||
            !security.isValidData(req.body.deps) ||
            !security.isValidData(req.body.order)) {
                res.status(412).send('missing or invalid data');
        } else {

            repMod.addPlatform(req, function (error, result) {
                if (error) {
                    res.status(200).send(error);
                } else {
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
router.post('/usrs/:usr_id/comps/:comp_id/life-cicles', function (req, res, next) {
    'use strict';
    try {
        repMod.addLifeCiclesToComp(req, function (error, result) {
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
router.post('/usrs/:usr_id/comps/:comp_id/comp-devs', function (req, res, next) {
    'use strict';
    try {

    	if (!security.isValidData(req.body.comp_id) ||
            !security.isValidData(req.body.dev_id) ||
            !security.isValidData(req.body.role) ||
            !security.isValidData(req.body.scope) ||
            !security.isValidData(req.body.percnt)) {
                res.status(412).send('missing or invalid data');
        } else {

            repMod.addCompDev(req, function (error, result) {
                if (error) {
                    res.status(200).send(error);
                } else {
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
router.post('/usrs/:usr_id/procs/:proc_id/steps', function (req, res, next) {
    'use strict';
    try {

    	if (!security.isValidData(req.body.proc_id) ||
              !security.isValidData(req.body.platfrm_code) ||
              !security.isValidData(req.body.suprlay_code) ||
              !security.isValidData(req.body.layer_name) ||
              !security.isValidData(req.body.comp_name) ||
              !security.isValidData(req.body.type)||
              !security.isValidData(req.body.title) ||
              !security.isValidData(req.body.desc) ||
              !security.isValidData( req.body.order)) {

                res.status(412).send('missing or invalid data');

        } else {

            repMod.addStep(req, function (error, result) {
                if (error) {
                    res.status(200).send(error);
                } else {
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
router.get('/usrs/:usr_id/procs/:proc_id', function (req, res, next) {
    'use strict';
    try {
        repMod.getProc(req, function (error, result) {
            if (error) {
                res.status(200).send(error);
            } else {
                if(result) {
                    res.status(200).send(result);
                } else {
                    res.status(404).send({message:"NOT FOUND"});
                }
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
router.put('/usrs/:usr_id/procs/:proc_id', function (req, res, next) {
    'use strict';
    try {
        repMod.uptProc(req, function (error, result) {
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
router.delete('/usrs/:usr_id/procs/:proc_id', function (req, res, next) {
    'use strict';
    try {
        repMod.delProc(req, function (error, result) {
            if (error) {
                res.status(200).send(error);
            } else {
                res.status(204)
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
router.get('/usrs/:usr_id/comps/:comp_id', function (req, res, next) {
    'use strict';
    try {
        repMod.getComp(req, function (error, result) {
            if (error) {
                res.status(200).send(error);
            } else {
                if(result) {
                    res.status(200).send(result);
                } else {
                    res.status(404).send({message:"NOT FOUND"});
                }
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
router.put('/usrs/:usr_id/comps/:comp_id', function (req, res, next) {
    'use strict';
    try {
        repMod.uptComp(req, function (error, result) {
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
router.delete('/usrs/:usr_id/comps/:comp_id', function (req, res, next) {
    'use strict';
    try {
        repMod.delComp(req, function (error, result) {
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
router.get('/usrs/:usr_id/layers/:lay_id', function (req, res, next) {
    'use strict';
    try {
        repMod.getLay(req, function (error, result) {
            if (error) {
                res.status(200).send(error);
            } else {
                if(result) {
                    res.status(200).send(result);
                } else {
                    res.status(404).send({message:"NOT FOUND"});
                }
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
router.put('/usrs/:usr_id/layers/:lay_id', function (req, res, next) {
    'use strict';
    try {
        repMod.uptLay(req, function (error, result) {
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
router.delete('/usrs/:usr_id/layers/:Lay_id', function (req, res, next) {
    'use strict';
    try {
        repMod.delLay(req, function (error, result) {
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
router.get('/usrs/:usr_id/suprlays/:sprly_id', function (req, res, next) {
    'use strict';
    try {
        repMod.getSprlay(req, function (error, result) {
            if (error) {
                res.status(200).send(error);
            } else {
                if(result) {
                    res.status(200).send(result);
                } else {
                    res.status(404).send({message:"NOT FOUND"});
                }
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
router.put('/usrs/:usr_id/suprlays/:sprly_id', function (req, res, next) {
    'use strict';
    try {
        repMod.uptSprlay(req, function (error, result) {
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
router.delete('/usrs/:usr_id/suprlays/:sprly_id', function (req, res, next) {
    'use strict';
    try {
        repMod.delSprlay(req, function (error, result) {
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
router.get('/usrs/:usr_id/platforms/:pltf_id', function (req, res, next) {
    'use strict';
    try {
        repMod.getPltf(req, function (error, result) {
            if (error) {
                res.status(200).send(error);
            } else {
                if(result) {
                    res.status(200).send(result);
                } else {
                    res.status(404).send({message:"NOT FOUND"});
                }
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
router.put('/usrs/:usr_id/platforms/:pltf_id', function (req, res, next) {
    'use strict';
    try {
        repMod.uptPltf(req, function (error, result) {
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
router.delete('/usrs/:usr_id/platforms/:pltf_id', function (req, res, next) {
    'use strict';
    try {
        repMod.delPltf(req, function (error, result) {
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
router.post('/usrs/:usr_id/itms/:itm_id/locks', function (req, res, next) {
    'use strict';
    // TODO: insert auth
    try {
        repMod.doLock(req, function (error, result) {
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