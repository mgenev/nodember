App.PhotoViewerView = Ember.View.extend({
    didInsertElement: function() {
      var self = this;
       $('.photo').imagesLoaded(function() { 
         self.setSidePanelHeight();
       });
    },
     //Em.run.scheduleOnce('afterRender', this, this.setSidePanelHeight)      
    setSidePanelHeight: function () {
      var height = $('.photo').height();
      $('.side-panel').height(height);
    }
});
