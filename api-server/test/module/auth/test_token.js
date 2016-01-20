var modToken = require('../../../modules/auth/token');
var mongoose = require('mongoose');
var accessKey = null;
var _INTERVAL = 2000;
var loop = 0;
console.log('info', 'Update interval on every %s minutes', (_INTERVAL / 1000) / 60);
setInterval(function() {
	var mod = loop % 7;
	loop++;
	switch (mod) {
		case 0:
			console.log('info', 'Starting database connexion');
			var db = require('../../../db');
			break;
		case 1:
			console.log('info', 'Inserting Token 1 ');
			modToken.insToken(new mongoose.Types.ObjectId("569ff8867a833e1f1bd9b4d3"), new mongoose.Types.ObjectId("569ff9157bdc782d1b1f3343"), function(err, res) {
				if (err) {
					console.log('error', err);
				} else {
					console.log('info', 'Succes ok');
					console.log(res);
				}
			});
			break;
		case 2:
			console.log('info', 'Inserting Token 2');
			modToken.insToken(new mongoose.Types.ObjectId("569ff8827a833e1f1bd9b4c5"), new mongoose.Types.ObjectId("569ff9117bdc782d1b1f3338"), function(err, res) {
				if (err) {
					console.log('error', err);
				} else {
					console.log('info', 'Succes ok');
					console.log(res);
					accessKey = res.axs_key;
					console.log("accessKey: "+accessKey);
				}
			});
			break;
		case 3:
			console.log('info', 'Obtaining token list');
			modToken.getListTokens(function(err_res, res_token) {
				if (err_res) {
					console.log('error', err_res);
				} else {
					console.log("List tokens: ");
					console.log(res_token);
				}
			});
			break;
		case 4: 
			console.log('info', 'Update token by acces key: '+accessKey);
			modToken.updateToken(accessKey, function(err_res, res_token) {
				if (err_res) {
					console.log('error', err_res);
				} else {
					console.log("Token updated: ");
					console.log(res_token);
				}
			});
			break;
		case 5:
			console.log('info', 'Obtaining token by access key: '+accessKey);
			modToken.getToken(accessKey, function(err_res, res_token) {
				if (err_res) {
					console.log('error', err_res);
				} else {
					console.log("Token: ");
					console.log(res_token);
				}
			});
			break;
		case 6:
			console.log('info', 'Killing process');
			process.exit(1);
			break;
	}
}, _INTERVAL);