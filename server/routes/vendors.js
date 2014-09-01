module.exports = function(app, passport, auth) {
    //vendor Routes
    var vendors = require('../controllers/vendors');
    app.get('/vendors', vendors.index);
    // app.post('/vendors', auth.requiresLogin, vendors.create);
    app.post('/vendors', vendors.create);
    app.get('/vendors/:vendorId', vendors.show);
    // app.put('/vendors/:vendorId', auth.requiresLogin, auth.vendor.hasAuthorization, vendors.update);
    // app.del('/vendors/:vendorId', auth.requiresLogin, auth.vendor.hasAuthorization, vendors.destroy);
    
    app.put('/vendors/:vendorId', vendors.update);
    app.del('/vendors/:vendorId', auth.requiresLogin, vendors.destroy);
    
    //Finish with setting up the vendorId param
    app.param('vendorId', vendors.vendor);
};