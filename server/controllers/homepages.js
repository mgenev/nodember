/**
 * Module dependencies.
 */

var async = require('async'),
    mongoose = require('mongoose'),
    Homepage = mongoose.model('Homepage'),
    Template = mongoose.model('Template'),
    _ = require('underscore');

/**
 * Find article by id
 */
exports.homepage = function(req, res, next, id) {

    Homepage.load(id, function(err, homepage) {
        if (err) return next(err);
        if (!homepage) return next(new Error('Failed to load homepage ' + id));

        req.homepage = homepage;
        next();
    });
};

/**
 * Create a article
 */
exports.create = function(req, res) {
    var homepage = new Homepage(req.body.homepage);
    var template = req.body.homepage.homepageTemplate;
    // TODO save the template and the vendor    
    // the ID's here come from the request from the create homepage UI.

    
    console.log('req.user', req.user);
    // // vendor is also used as a url segment to hit that homepage directly
    // homepage.vendor = req.vendor;


    // homepage.user = req.user._id;

    // content is made from the schema initially to make the original rendering
    homepage.pageContent = template.templateSchema;

    // name is for rendering through ember
    homepage.homepageTemplateName = template.name;

    homepage.save(function(err) {
        console.log('err', err);
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                homepage: homepage
            });
        } else {
            res.jsonp({homepage: homepage});
        }
    });
};


/**
 * Update a article
 */
exports.update = function(req, res) {

    var homepage = req.homepage;
    // article.title = req.body.article.title;
    // article.articleContent = req.body.article.articleContent;
    // article.urlSegment = req.body.article.urlSegment;
    // article.type = req.body.article.type;

    homepage.save(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {

            res.send({
                homepage: homepage
            });
        }
    });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var homepage = req.homepage;

    homepage.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(article);
        }
    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.send({
        homepage: req.homepage
    });
};

/**
 * List of Articles
 */
exports.index = function(req, res, next) {
    console.log('hit index');
    if (!_.isEmpty(req.query))  {
        console.log('hit index if', req.query);
        // req.query is the exact type of object which mongoose can use to query
        //  so we  send it to a querying static method in the model

        Homepage.query(req.query, function(err, homepages) {
            
            if (err) return next(err);
            console.log('homepages', homepages);
            if (!homepages)  {
                res.send({error: new Error('Failed to load homepage for query')});
            } else {
                res.send({homepages: [homepages]});    
            }
            
        });
    } else {
        console.log('hit index else');
        // else we find all
        Homepage.find().sort('-created').populate('user', 'name username').exec(function(err, homepages) {

            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.send({
                    homepages: homepages
                });
            }
        });
    }
};
