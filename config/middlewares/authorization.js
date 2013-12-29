var userIsAdmin = require('./admins.js').userIsAdmin;

/**
 * Generic require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

/**
 * User authorizations routing middleware
 */
exports.user = {
    hasAuthorization: function(req, res, next) {
        if (req.profile.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

/**
 * Article authorizations routing middleware
 */
exports.article = {
    hasAuthorization: function(req, res, next) {
        if (req.article.user.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

/**
 * Client authorizations routing middleware
 */
exports.client = {
    hasAuthorization: function(req, res, next) {
        if (!userIsAdmin(req.user.email)) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

/**
 * Reservation authorizations routing middleware
 */
exports.reservation = {
    hasAuthorization: function(req, res, next) {
        if (req.reservation.user.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};


/**
 * Service authorizations routing middleware
 */
exports.service = {
    hasAuthorization: function(req, res, next) {
        if (!userIsAdmin(req.user.email)) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};
