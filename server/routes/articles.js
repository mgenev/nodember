module.exports = function(app, passport, auth) {
    //Article Routes
    var articles = require('../controllers/articles');
    app.get('/articles', articles.index);
    // app.post('/articles', auth.requiresLogin, articles.create);
    app.post('/articles', articles.create);
    app.get('/articles/:articleId', articles.show);
    // app.put('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.update);
    // app.del('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.destroy);
    
    app.put('/articles/:articleId', articles.update);
    app.del('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.destroy);
    
    //Finish with setting up the articleId param
    app.param('articleId', articles.article);
};