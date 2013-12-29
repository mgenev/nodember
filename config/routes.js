var async = require('async');

module.exports = function(app, passport, auth) {
    //User Routes
    var users = require('../app/controllers/users');
    app.get('/signin', users.signin);
    app.get('/signup', users.signup);
    app.get('/signout', users.signout);

    //Setting up the users api
    app.post('/users', users.create);

    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: 'Invalid email or password.'
    }), users.session);

    app.get('/users/me', users.me);
    app.get('/users/:userId', users.show);

    //Setting the facebook oauth routes
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email', 'user_about_me'],
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the github oauth routes
    app.get('/auth/github', passport.authenticate('github', {
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/github/callback', passport.authenticate('github', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the twitter oauth routes
    app.get('/auth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the google oauth routes
    app.get('/auth/google', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }), users.signin);

    app.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Finish with setting up the userId param
    app.param('userId', users.user);

    //Article Routes
    var articles = require('../app/controllers/articles');
    app.get('/articles', articles.all);
    app.post('/articles', auth.requiresLogin, articles.create);
    app.get('/articles/:articleId', articles.show);
    app.put('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.update);
    app.del('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.destroy);

    //Finish with setting up the articleId param
    app.param('articleId', articles.article);

    //Client Routes
    var clients = require('../app/controllers/clients');
    app.get('/clients', clients.all);
    app.post('/clients', auth.requiresLogin, clients.create);
    app.get('/clients/:clientId', clients.show);
    app.put('/clients/:clientId', auth.requiresLogin, auth.client.hasAuthorization, clients.update);
    app.del('/clients/:clientId', auth.requiresLogin, auth.client.hasAuthorization, clients.destroy);
    app.del('/clients', auth.requiresLogin, auth.client.hasAuthorization, clients.destroyAll);

    //Finish with setting up the articleId param
    app.param('clientId', clients.client);

    //Reservation Routes
    var reservations = require('../app/controllers/reservations');
    app.get('/reservations', reservations.all);
    app.post('/reservations', auth.requiresLogin, reservations.create);
    app.get('/reservations/:reservationId', reservations.show);
    app.put('/reservations/:reservationId', auth.requiresLogin, auth.reservation.hasAuthorization, reservations.update);
    app.del('/reservations/:reservationId', auth.requiresLogin, auth.reservation.hasAuthorization, reservations.destroy);

    //Finish with setting up the reservationId param
    app.param('reservationId', reservations.reservation);

    //Service Routes
    var services = require('../app/controllers/services');
    app.get('/services', services.all);
    app.get('/servicesbytype/:serviceType', services.byType);
    app.post('/services', auth.requiresLogin, services.create);
    app.get('/services/:serviceId', services.show);
    app.put('/services/:serviceId', auth.requiresLogin, auth.service.hasAuthorization, services.update);
    app.del('/services/:serviceId', auth.requiresLogin, auth.service.hasAuthorization, services.destroy);
    app.del('/services', auth.requiresLogin, auth.service.hasAuthorization, services.destroyAll);

    //Finish with setting up the serviceId param
     app.param('serviceId', services.service);


    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

};
