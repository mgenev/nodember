App.ProfileController = Ember.ObjectController.extend({
	needs: ['application'],
	currentUser: function () {
		return this.get('controllers.application.currentUser');
	}
});