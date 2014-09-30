
// requiring routes by category

module.exports = function(app, passport, auth) {

    require('./auth')(app, passport, auth);
    require('./articles')(app, passport, auth);
    require('./users')(app, passport, auth);
    require('./vendors')(app, passport, auth);
    require('./homepages')(app, passport, auth);
    require('./templates')(app, passport, auth);    
    require('./photos')(app, passport, auth);    

    //Home route
    var index = require('../controllers/index');
    app.get('/', index.render);

};