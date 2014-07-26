App.ApplicationController = Ember.ObjectController.extend({
	init: function () {
		var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
		this.set('isMobile', isMobile);

		this.set('currentUser',  JSON.parse(localStorage.getItem('user')));
	}
});