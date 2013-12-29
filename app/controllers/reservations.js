/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Reservation = mongoose.model('Reservation'),
    _ = require('underscore');


/**
 * Find reservation by id
 */
exports.reservation = function(req, res, next, id) {
    Reservation.load(id, function(err, reservation) {
        if (err) return next(err);
        if (!reservation) return next(new Error('Failed to load reservation ' + id));
        req.reservation = reservation;
        next();
    });
};

/**
 * Create a reservation
 */
exports.create = function(req, res) {
    var reservation = new Reservation(req.body);
    reservation.user = req.user;

    reservation.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                reservation: reservation
            });
        } else {
            res.jsonp(reservation);
        }
    });
};

/**
 * Update a reservation
 */
exports.update = function(req, res) {
    var reservation = req.reservation;

    reservation = _.extend(reservation, req.body);

    reservation.save(function(err) {
        res.jsonp(reservation);
    });
};

/**
 * Delete an reservation
 */
exports.destroy = function(req, res) {
    var reservation = req.reservation;

    reservation.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(reservation);
        }
    });
};

/**
 * Show an reservation
 */
exports.show = function(req, res) {
    res.jsonp(req.reservation);
};

/**
 * List of Reservations
 */
exports.all = function(req, res) {
    Reservation.find().sort('-created').populate('user', 'name username').exec(function(err, reservations) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(reservations);
        }
    });
};
