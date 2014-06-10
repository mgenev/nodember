App.PhotoViewerView = Ember.View.extend({
    didInsertElement: function() {
        this.setViewerHeight();
        $('.photo').imagesLoaded(function() {
            $('.full-size-photo-viewer').css('opacity', 1);
        });

        $(window).resize(function() {
          this.setViewerHeight();
        });
    },    
    setViewerHeight: function() {
        var height = $(window).height() - 50;
        $('.photo').height(height);
        $('.side-panel').height(height);
    }
});
