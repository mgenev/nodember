module.exports = function(app, passport, auth) {
    //template Routes
    var templates = require('../controllers/templates');
    
    app.get('/templates', templates.index);
    app.get('/templates/load', templates.load);

    app.post('/templates', templates.create);
    app.get('/templates/:templateId', templates.show);
    // app.put('/templates/:templateId', auth.requiresLogin, auth.template.hasAuthorization, templates.update);
    // app.del('/templates/:templateId', auth.requiresLogin, auth.template.hasAuthorization, templates.destroy);
    
    app.put('/templates/:templateId', templates.update);
    app.del('/templates/:templateId', auth.requiresLogin, templates.destroy);
    
    //Finish with setting up the templateId param
    app.param('templateId', templates.template);
};