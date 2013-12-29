/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Client = mongoose.model('Client'),
    _ = require('underscore');


/**
 * Find client by id
 */
exports.client = function(req, res, next, id) {
    Client.load(id, function(err, client) {
        if (err) return next(err);
        if (!client) return next(new Error('Failed to load client ' + id));
        req.client = client;
        next();
    });
};

/**
 * Create a client
 */
exports.create = function(req, res) {
    var client = new Client(req.body);
    //client.user = req.user;

    client.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                client: client
            });
        } else {
            res.jsonp(client);
        }
    });
};

/**
 * Update a client
 */
exports.update = function(req, res) {
    var client = req.client;

    client = _.extend(client, req.body);

    client.save(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(client);
        }
    });
};

/**
 * Delete an client
 */
exports.destroy = function(req, res, next) {
    var client = req.client;
    console.log('DELETING CLIENT: ' + client);

    client.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(client);
        }
    });

    next();
};

/**
 * Delete all clients
 */
exports.destroyAll = function(req, res) {
    console.log('DELETING ALL CLIENTS');

    Client.find().exec(function(err, clients) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            for (var i = 0; i < clients.length; i++) {
                // LATER - remove callback from remove method
                clients[i].remove();
            }
            res.jsonp(200);
        }
    });
};

/**
 * Show an client
 */
exports.show = function(req, res) {
    res.jsonp(req.client);
};

/**
 * List of Clients
 */
exports.all = function(req, res) {
    Client.find().sort('-created').exec(function(err, clients) { //.populate('user', 'name username').exec(function(err, clients) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(clients);
        }
    });
};
