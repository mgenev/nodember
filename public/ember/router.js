Emberapp.Router.map(function () {
	
	this.resource('articles', function() {
    	this.route('create');
    	this.route('view');
    	this.route('edit');
  });
    
});
