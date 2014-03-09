/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    _ = require('underscore');


exports.render = function(req, res) {
	console.log('request user');
	console.log(req.user);
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : "null"
    });
};