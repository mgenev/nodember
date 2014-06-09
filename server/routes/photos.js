module.exports = function(app, passport, auth) {
    //Article Routes
    var photos = require('../controllers/photos');
	
	app.get('/photos', photos.index);
	app.get('/photos/:photoId', photos.show);
	app.post('/photos/upload', photos.upload());
	app.get('/photos/:id/download', photos.download(app.get('photos')));
       
    //Finish with setting up the articleId param
    app.param('photoId', photos.photo);
};