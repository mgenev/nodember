App.UsersIndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('user');
    }
});

App.UsersUserRoute = Ember.Route.extend({
    model: function(params) {    	        
        return this.store.find('user', params.user_id);
    }
});

App.UsersCreateRoute = Ember.Route.extend({
    model: function() {
        return this.store.createRecord('user', {});
    }
});
