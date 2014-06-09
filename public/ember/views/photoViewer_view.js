App.PhotoViewerView = Ember.View.extend({
    didInsertElement: function() {
        var self = this;
        $('.photo').imagesLoaded(function() {
            self.setSidePanelHeight();
            $('.full-size-photo-viewer').css('opacity', 1);
        });

        $(window).resize(function() {
          self.setSidePanelHeight();
        });
    },
    //Em.run.scheduleOnce('afterRender', this, this.setSidePanelHeight)      
    setSidePanelHeight: function() {
        var height = $('.photo').height();
        console.log('height is', height);
        $('.side-panel').height(height);
    }
});
