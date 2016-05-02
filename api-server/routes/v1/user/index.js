var express = require('express');
var router = express.Router();
var usrMod = require('../../../modules/auth/user');
var security = require('../../../lib/utils/security');
/**
 * @api {post} /v1/user/:usr_id/changePerms changePermission
 * @apiName ChangePermission
 * @apiVersion 0.0.2
 * @apiGroup Auth
 * @apiParam {String} usrnm User name.
 * @apiParam {String} perm User permission.
 * @apiParam {ObjectId} usr_id Id of the user who granted permission.
 * @apiDescription Give permissions to another user.
 */
router.post('/:usr_id/changePerms', function (req, resp, next) {
	try {
		if (!security.isValidPerm(req.body.perm)) {
			resp.status(412).send({
				"message": "missing or invalid data"
			});
		} else {
			console.log("Updating permission to user " + req.body.usrnm);
			console.log("Assigning permission: " + req.body.perm);
			usrMod.changePermission(req.params.usr_id, req.body.usrnm, req.body.perm, function (err, res) {
				if (err) {
					console.log("Error change permission", err);
					resp.status(402).send("Could not change the permission");
				} else {
					console.log("Info", "Permission successfully changed");
					resp.status(200).send(res);
				}
			});
		}
	} catch (err) {
		console.error("Error", err);
	}
});
/**
 * @api {post} /v1/user/:usrnm getUsrsByUsrnm
 * @apiName GetUsrsByUsrnm
 * @apiVersion 0.0.2
 * @apiGroup User
 * @apiParam {String} usrnm User name of the user who granted permission.
 * @apiDescription Get user data by usrnm.
 */
router.get('/:usrnm', function (req, resp, next) {
	try {
		if (!security.isUsername(req.params.usrnm)) {
			resp.status(412).send({
				"message": "missing or invalid data"
			});
		} else {
			usrMod.getUsrsByUsrnm(req.params.usrnm, function (err, res) {
				if (err) {
					console.log("Error getting user", err);
					resp.status(402).send("Could not get user");
				} else {
					console.log("Info", "User successfully obtained");
					resp.status(200).send(res);
				}
			});
		}
	} catch (err) {
		console.error("Error", err);
	}
});
// router export
module.exports = router;