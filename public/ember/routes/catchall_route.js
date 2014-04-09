App.CatchallRoute = Ember.Route.extend({
    model: function(params) {
		return this.store.find('article', {urlSegment: params.url});
    }
});
