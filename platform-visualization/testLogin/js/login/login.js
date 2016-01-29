var api_key = "56a10473b27e63185c6970d6";

/**
 * Login with github and gets the authorization code
 */
function getAuthCode() {
	window.location.href = 'https://github.com/login/oauth/authorize?client_id=6cac9cc2c2cb584c5bf4';
};

/**
 * Ago logout and delete the token
 */
function logout() {
	var axs_key = $.cookie('axs_key');
	var url_logout = "http://localhost:3000/v1/auth/logout?axs_key=" + axs_key
			+ "&api_key=" + api_key;
	console.log("url: " + url_logout);
	$.ajax({
		url : url_logout,
		type : "GET",
		headers : {
			'Accept' : 'application/json'
		}
	}).success(function(data) {
		console.log("Logout", data);
		if (data != undefined)
			if (data == true) {
				deleteCookie ();
				clean();
			}
	});
};

/**
 * Logged to the user and returns the token
 */
function login() {
	var url = "http://localhost:3000/v1/auth/login?code=" + code + "&api_key="
			+ api_key;
	console.log("url: " + url);
	$.ajax({
		url : url,
		type : "GET",
		headers : {
			'Accept' : 'application/json'
		}
	}).success(function(tkn) {
		var usr = tkn._usr_id;
		var axs_key = tkn.axs_key;
		if (usr != undefined) {
			$.cookie("axs_key", axs_key);
			saveUsr(usr);
			fill();
		} else
			console.log("Error:", tkn);
	});
}

/**
 * User data stored in cookies
 * 
 * @param usr
 */
function saveUsr(usr) {
	$.cookie("usr_id", usr._id);
	$.cookie("name", usr.name);
	$.cookie("usrnm", usr.usrnm);
	$.cookie("email", usr.email);
	$.cookie("github_tkn", usr.github_tkn);
	$.cookie("avatar_url", usr.avatar_url);
};

function fill() {
	$('#name').val($.cookie('name'));
	$('#usrnm').val($.cookie('usrnm'));
	$('#email').val($.cookie('email'));
	$('#github_tkn').val($.cookie('github_tkn'));
	$('#avatar_url').val($.cookie('avatar_url'));
	$('#axs_key').val($.cookie('axs_key'));
};

function deleteCookie () {
	$.removeCookie('name');
	$.removeCookie('usrnm');
	$.removeCookie('email');
	$.removeCookie('github_tkn');
	$.removeCookie('avatar_url');
	$.removeCookie('axs_key');
};

function clean () {
	$('#name').val("");
	$('#usrnm').val("");
	$('#email').val("");
	$('#github_tkn').val("");
	$('#avatar_url').val("");
	$('#axs_key').val("");
}

var code = window.location.toString().replace(/.+code=/, '');
if (!(code.indexOf("/") >= 0)) {
	login();
}
