App.Router.map(function () {
	this.route('catchall', { path: '/*url'});  // catch-all routes

	this.resource('articles', function() {
		this.route('create', { path: '/create' });
		this.route('article', { path: ':article_id' });
  });    
});
