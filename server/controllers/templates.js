/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Template = mongoose.model('Template'),
    fs = require('fs'),
    root = require('../../root');

    


/**
 * Find template by id
 */
exports.template = function(req, res, next, id) {

    Template.load(id, function(err, template) {
        if (err) return next(err);
        if (!template) return next(new Error('Failed to load template ' + id));

        req.template = template;
        next();
    });
};

/**
 * Create a template
 */
exports.create = function(req, res) {
    var formattedTemplate = {};
    var template = new Template(req.body.template);
    template.user = req.user;

    async.series([
        function(callback) {
            fs.readFile(root + '/public/ember/template_schemas/' + template.title + '.json', 'utf8', function(err, data) {
                if (err) throw err;
                console.log('data from file is:', data);
                template.templateSchema = JSON.parse(data);
                callback();
            });

        },
        function(callback) {
            template.save(function(err) {
                console.log('template saved is:', template);
                if (err) throw err;
                formattedTemplate.template = template;
                callback();
            });
        }
    ], function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                template: template
            });
        } else {
            res.jsonp(formattedTemplate);
        }
    });
};

/**
 * Update a template
 */
exports.update = function(req, res) {

    var template = req.template;
    template.title = req.body.template.title;
    template.templateContent = req.body.template.templateContent;

    template.save(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            var templateObj = {
                template: template
            };
            res.send({
                template: template
            });
        }
    });
};

/**
 * Delete an template
 */
exports.destroy = function(req, res) {
    var template = req.template;

    template.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(template);
        }
    });
};

/**
 * Show an template
 */
exports.show = function(req, res) {
    res.send({
        template: req.template
    });
};

/**
 * List of templates
 */
exports.all = function(req, res) {
    console.log(root);
    Template.find().sort('-created').populate('user', 'name username').exec(function(err, templates) {

        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.send({
                templates: templates
            });
        }
    });
};
