App.HeaderController = Ember.ObjectController.extend({
	needs: ['application'],
	init: function () {
		var isMobile = this.get('controllers.application.isMobile');
		this.set('isMobile', isMobile);
	}
});