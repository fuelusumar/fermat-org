/*global require*/
var express = require('express');
var router = express.Router();

// split up route handling
var repo = require('./repo');
var net = require('./network');
var mnft = require('./manifest');
// etc.

// list route namespaces
router.use('/repo', repo);
router.use('/network', net);
router.use('/manifest', mnft);
// etc.

module.exports = router;