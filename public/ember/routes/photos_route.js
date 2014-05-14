App.PhotosIndexRoute = Ember.Route.extend({
    model: function () {
        // return this.store.find('photo');
        return ['1', '2', '3']
    }
});

App.PhotosPhotoRoute = Ember.Route.extend({
    model: function (params) {
      return this.store.find('photo', params.photo_id);
    }
});

App.PhotosCreateRoute = Ember.Route.extend({
    model: function () {
       return this.store.createRecord('photo', {name: ''});
    }
});

