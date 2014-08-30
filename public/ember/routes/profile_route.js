App.ProfileRoute = Ember.Route.extend({
    model: function(params) {    
        return  this.controllerFor('application').get('currentUser');
    }
});
