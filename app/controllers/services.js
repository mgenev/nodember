/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Service = mongoose.model('Service'),
    _ = require('underscore');


/**
 * Find service by id
 */
exports.service = function(req, res, next, id) {
    console.log("id in service.service", id);
    Service.load(id, function(err, service) {
        if (err) return next(err);
        if (!service) return next(new Error('Failed to load service ' + id));
        req.service = service;
        next();
    });
};

var util = require('util');
/**
 * Create a service
 */
exports.create = function(req, res) {
    var service = new Service(req.body);
    console.log("service client is: ", service.client.toString());    
    //service.client = mongoose.Types.ObjectId(service.client.toString());
    //console.log("request client name is: ", util.inspect(req.client));

    //console.log("service client is: ", service.client);

    service.save(function(err, service) {
        //console.log('saving: ' + JSON.stringify(service));
        if (err) {
            console.log("save is erroring out", err);
            return res.send('users/signup', {
                errors: err.errors,
                service: service
            });
        } else {
            res.jsonp(service);
        }
    });
};

/**
 * Update a service
 */
exports.update = function(req, res) {
    var service = req.service;

    service = _.extend(service, req.body);

    service.save(function(err) {
        res.jsonp(service);
    });
};

/**
 * Delete an service
 */
exports.destroy = function(req, res) {
    var service = req.service;

    service.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(service);
        }
    });
};

/**
 * Delete all services
 */
exports.destroyAll = function(req, res) {
    console.log('DELETING ALL SERVICES');

    Service.find().exec(function(err, services) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            for (var i = 0; i < services.length; i++) {
                // LATER - remove callback from remove method
                services[i].remove();
            }
            res.jsonp(200);
        }
    });
};

/**
 * Show an service
 */
exports.show = function(req, res) {
    res.jsonp(req.service);
};

exports.byType = function(req, res) {
    console.log(req.params);
   Service.find({
            serviceType: req.params.serviceType
        }).sort('-name').exec(function(err, services) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(services);
        }
    });
};


/**
 * List of Services
 */
exports.all = function(req, res) {
    Service.find().sort('-created').populate('client', 'name address').exec(function(err, services) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(services);
        }
    });
};
