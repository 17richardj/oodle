var express = require('express');
var path = require('path');

var bcrypt = require('bcrypt');
const saltRounds = 10;

var router = express.Router();

var ssn;

router.get('/', function (req, res, next) {
	return res.render('landing.ejs');
});

router.post('/', function (req, res, next)
{
	console.log('home');

});

router.post('/verify', function(req, res, next) {

});

router.get('/edit', function (req, res) {
	res.render('edit_info.ejs');
});
// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/teacher_login');
}


router.get('/logout', function (req, res, next) {
	console.log("logout")
	if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
    	if (err) {
    		return next(err);
    	} else {
    		return res.redirect('/');
    	}
    });
}
});


	//connection.query("SELECT * FROM classes WHERE search_code= '"+req.session.search_code+"'", function (err, result, fields)
	//connection.query("SELECT * FROM classes WHERE search_code= '"+req.body.search_code+"'", function (err, result, fields) {
		//if (err) throw err;

module.exports = router;
