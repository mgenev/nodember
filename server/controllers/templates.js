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

exports.loadAvailable = function(req, res) {
    // this is the initial load of template, triggered by a admin button push in ember, in the template route
    var dir = root + '/server/template_schemas/'

    fs.readdir(dir, function(err, list) {
        if (err) return done(err);
        var pending = list.length;
        var counter = 0;

        if (!pending) return done(null, results);

        list.forEach(function(file) {
            var template = new Template({name: file});
            file = dir + '/' + file;            
            template.user = req.user;

            async.series([

                function(callback) {
                    fs.readFile(file, 'utf8', function(err, data) {
                        if (err) throw err;
                        console.log('data from file is:', data);
                        template.templateSchema = JSON.parse(data);
                        callback();
                    });

                },
                function(callback) {
                    template.save(function(err) {
                        if (err) throw err;
                        counter++;
                        callback();
                    });
                }
            ], function(err) {
                if (err) {
                    return res.send({
                        errors: err.errors
                    });
                } else {
                    res.jsonp(
                        formattedTemplate, pending, counter);
                }
            });
        });
    });
};

/**
 * Create a template
 */
exports.create = function(req, res) {
    // TODO REWRITE for new case, 
    // write discovery and/or upload of possible templates somehow to surface through ember


    // TODO json schema should come from upload when creating new and the ember template should be copied to the right
    // directory 

    var formattedTemplate = {};
    var template = new Template(req.body.template);
    template.user = req.user;


    // read json schema from FS
    // save new record with that schema
    // return in response
    async.series([

        function(callback) {
            fs.readFile(root + '/server/template_schemas/' + template.title + '.json', 'utf8', function(err, data) {
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
