module.exports = function(app, passport, auth) {
    //Article Routes
    var articles = require('../controllers/photos');
	
	app.get('/photos', photos.index);
	app.post('/photos/upload', photos.submit(app.get('photos')));
	app.get('/photos/:id/download', photos.download(app.get('photos')));
    
    //Finish with setting up the articleId param
    // app.param('photoId', photos.photo);
};