App.Router.map(function () {
	
	this.resource('articles', function() {
    	this.route('create', { path: '/create' });
    	this.route('view', { path: '/view' });
    	this.route('edit', { path: '/edit' });
  });
    
});
