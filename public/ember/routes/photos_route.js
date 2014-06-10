App.PhotosRoute = Ember.Route.extend({
    model: function () {
 	 	return this.store.find('photo');
    }
});

App.PhotosPhotoRoute = Ember.Route.extend({
    model: function (params) {
      return this.store.find('photo', params.photo_id);
    }
});

App.PhotosCreateRoute = Ember.Route.extend({
});

