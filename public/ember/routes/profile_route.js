App.ProfileRoute = Ember.Route.extend({
    model: function(params) {    
        var userId = this.controllerFor('application').get('currentUser')._id;
        console.log(userId);
        return  this.store.find('user', userId);
    }
});
