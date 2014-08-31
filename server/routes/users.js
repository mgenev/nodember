module.exports = function(app, passport, auth) {
    //Article Routes
    var users = require('../controllers/users');
    app.get('/users', users.index);
    // app.post('/articles', auth.requiresLogin, articles.create);
    app.post('/users', users.create);
    app.get('/users/:userId', users.show);
    // app.put('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.update);
    // app.del('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.destroy);
    
    app.put('/users/:userId', users.update);
    app.del('/users/:usereId', auth.requiresLogin, users.destroy);
    
    //Finish with setting up the articleId param
    app.param('userId', users.user);
};