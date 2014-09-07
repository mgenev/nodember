App.ProfileRoute = Ember.Route.extend({
    beforeModel: function(transition) {
        var userId;
        if (this.controllerFor('application').get('currentUser')) {
            userId = this.controllerFor('application').get('currentUser')._id;
        } else if (localStorage.getItem('user')) {
            userId = localStorage.getItem('user')._id;
        } else {
            transition.send('invalidateSession');                       
        }
	  	this.set('userId', userId)
    },
    model: function() {
        if (this.get('userId')) {
            return this.store.find('user', this.get('userId'));
        } else {
        	this.transitionTo('login');
        }
    }
});
