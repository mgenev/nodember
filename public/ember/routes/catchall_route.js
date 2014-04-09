App.CatchallRoute = Ember.Route.extend({
    model: function(params) {
        // Alternative
        // return Ember.$.get('articles', {
        //     urlSegment: params.url
        // });

		return this.store.find('article', {urlSegment: params.url});
    }
});
