App.Router.map(function () {
	
	this.resource('articles', function() {
    	this.route('create', { path: '/create' });
    	this.route('view', { path: ':article_id' });
    	this.route('edit', { path: '/edit/:article_id/' });
  });
    
});
