module.exports = function(app, passport, auth) {
    //homepage Routes
    var homepages = require('../controllers/homepages');
    app.get('/homepages', homepages.index);
    // app.post('/homepages', auth.requiresLogin, homepages.create);
    app.post('/homepages', homepages.create);
    app.get('/homepages/:homepageId', homepages.show);
    // app.put('/homepages/:homepageId', auth.requiresLogin, auth.homepage.hasAuthorization, homepages.update);
    // app.del('/homepages/:homepageId', auth.requiresLogin, auth.homepage.hasAuthorization, homepages.destroy);
    
    app.put('/homepages/:homepageId', homepages.update);
    app.del('/homepages/:homepageId', auth.requiresLogin, homepages.destroy);
    
    //Finish with setting up the homepageId param
    app.param('homepageId', homepages.homepage);
};