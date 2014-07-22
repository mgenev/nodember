App.ProtectedRoute = Ember.Route.extend(global.SimpleAuth.AuthenticatedRouteMixin, {
    model: function() {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.get('/articles').then(function(response) {
                resolve(JSON.stringify(response));
            });
        });
    }
});
