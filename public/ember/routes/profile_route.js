App.ProfileRoute = Ember.Route.extend({
    model: function(params) {    
        var userId = this.controllerFor('application').get('currentUser')._id;
        return  this.store.find('user', userId);
    }
});
