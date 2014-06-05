App.PhotoViewerController = Ember.ObjectController.extend({
  actions: {
    close: function() {
      return this.send('closeModal');
    }
  }
});
