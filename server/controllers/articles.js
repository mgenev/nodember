/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Article = mongoose.model('Article'),
    _ = require('underscore');


/**
 * Find article by id
 */
exports.article = function(req, res, next, id) {

    Article.load(id, function(err, article) {
        if (err) return next(err);
        if (!article) return next(new Error('Failed to load article ' + id));

        req.article = article;
        next();
    });
};

/**
 * Create a article
 */
exports.create = function(req, res) {
    var article = new Article(req.body.article);
    article.user = req.user;

    article.save(function(err) {

        Article.load(article._id, function(err, result) {
            if (err) {
                return res.send('users/signup', {
                    errors: err.errors,
                    article: result
                });
            } else {
                res.jsonp({
                    article: result
                });
            }
        });
    });
};

/**
 * Update a article
 */
exports.update = function(req, res) {

    var article = req.article;
    article.title = req.body.article.title;
    article.articleContent = req.body.article.articleContent;
    article.urlSegment = req.body.article.urlSegment;
    article.type = req.body.article.type;

    article.save(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.send({
                article: article
            });
        }
    });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var article = req.article;

    article.remove(function(err) {
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
        article: req.article
    });
};

/**
 * List of Articles
 */
exports.index = function(req, res, next) {

    if (!_.isEmpty(req.query)) {

        // req.query is the exact type of object which mongoose can use to query
        //  so we  send it to a querying static method in the model

        Article.query(req.query, function(err, articles) {
            if (err) return next(err);
            if (!articles) {
                res.send({
                    error: new Error('Failed to load article for query')
                });
            } else {
                res.send({
                    articles: [articles]
                });
            }

        });
    } else {
        // else we find all
        Article.find().sort('-created').populate('user', 'name username').exec(function(err, articles) {

            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.send({
                    articles: articles
                });
            }
        });
    }
};
