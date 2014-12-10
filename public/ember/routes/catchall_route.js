App.CatchallRoute = Ember.Route.extend({
    model: function(params) {
    	console.log('PARAMS, ', params);
		return this.store.find('homepage', {urlSegment: params.url});
    },    
    renderTemplate: function(controller, model) {
    	var templateName; 
    	var _this = this;
		model.forEach(function(item) {
			templateName = item._data.homepageTemplateName;
			_this.render('homepage_templates.' + templateName);
		});
        
    }
});
