/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User');

/**
 * Auth callback
 */
exports.authCallback = function(req, res, next) {
    res.redirect('/');
};

/**
 * Show login form
 */
exports.signin = function(req, res) {
    // TODO clean up
};

/**
 * Logout
 */
exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};

/**
 * Session
 */
exports.session = function(req, res) {
    res.jsonp({
        user: req.user
    });
};

/**
 * Update a article
 */
exports.update = function(req, res) {

    var user = req.user;
    user.username = req.body.user.username;
    user.email = req.body.user.email;
    user.name = req.body.user.name;
    

    user.save(function(err) {
        if (err) {
            res.send('error', {
                status: 500,
                error: err
            });
        } else {
            res.send({
                user: user
            });
        }
    });
};


/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var user = req.user;

    user.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(user);
        }
    });
};

/**
 * Create user
 */
exports.create = function(req, res) {
    var user = new User(req.body);
    user.provider = 'local';
    user.save(function(err) {
        if (err) {
            res.jsonp({
                error: err.errors,
                user: user
            });
        } else {
            res.jsonp({
                user: user
            });
        }
    });
};

/**
 *  Show profile
 */
exports.show = function(req, res) {
    res.send({
        user: req.user
    });
};


/**
 * Send User
 */
exports.me = function(req, res) {
    res.jsonp(req.user || null);
};

/**
 * Find user by id
 */
exports.user = function(req, res, next, id) {
    User
        .findOne({
            _id: id
        })
        .exec(function(err, user) {
            if (err) return next(err);
            if (!user) return next(new Error('Failed to load User ' + id));
            req.user = user;
            next();
        });
};



/**
 * List of Articles
 */
exports.index = function(req, res, next) {

    if (!_.isEmpty(req.query))  {

        // req.query is the exact type of object which mongoose can use to query
        //  so we  send it to a querying static method in the model

        User.query(req.query, function(err, users) {
            if (err) return next(err);
            if (!users)  {
                res.send({error: new Error('Failed to load article for query')});
            } else {
                res.send({users: [users]});    
            }
            
        });
    } else {
        // else we find all
        User.find().sort('-created').exec(function(err, users) {

            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.send({
                    users: users
                });
            }
        });
    }
};