/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Vendor = mongoose.model('Vendor'),
    _ = require('underscore');


/**
 * Find article by id
 */
exports.vendor = function(req, res, next, id) {

    Vendor.load(id, function(err, vendor) {
        if (err) return next(err);
        if (!vendor) return next(new Error('Failed to load vendor ' + id));

        req.vendor = vendor;
        next();
    });
};

/**
 * Create a article
 */
exports.create = function(req, res) {
    var vendor = new Vendor(req.body.vendor);

    vendor.user = req.user;
    vendor.save(function(err) {

        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                vendor: vendor
            });
        } else {
            res.jsonp({vendor: vendor});
        }
    });
};

/**
 * Update a article
 */
exports.update = function(req, res) {

    var vendor = req.vendor;
    vendor.name = req.body.vendor.name;
    vendor.type = req.body.vendor.type;
    vendor.urlSegment = req.body.vendor.urlSegment;


    vendor.save(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.send({
                vendor: vendor
            });
        }
    });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var vendor = req.vendor;

    vendor.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(vendor);
        }
    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.send({
        vendor: req.vendor
    });
};

/**
 * List of Articles
 */
exports.index = function(req, res, next) {

    if (!_.isEmpty(req.query))  {

        // req.query is the exact type of object which mongoose can use to query
        //  so we  send it to a querying static method in the model

        Vendor.query(req.query, function(err, vendors) {
            if (err) return next(err);
            if (!vendors)  {
                res.send({error: new Error('Failed to load vendors for query')});
            } else {
                res.send({vendors: [vendors]});    
            }
            
        });
    } else {
        // else we find all
        Vendor.find().sort('-created').populate('user', 'name username').exec(function(err, vendors) {

            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.send({
                    vendors: vendors
                });
            }
        });
    }
};
