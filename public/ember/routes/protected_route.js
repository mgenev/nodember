App.ProtectedRoute = Ember.Route.extend(global.SimpleAuth.AuthenticatedRouteMixin, {
   model: function () {
        return this.store.find('article');
    }
});
