App.PhotoViewerView = Ember.View.extend({
    eventManager: Ember.Object.create({
        keyDown: function(event, view) {
            // escape 
            if (event.keyCode === 27) {
                view.get('controller.controllers.PhotosPhoto').send('close', view.get('controller').content);
            }
            // right arrow
            if (event.keyCode === 39) {
                view.get('controller.controllers.PhotosPhoto').send('forward', view.get('controller').content);
            }

            // left arrow
            if (event.keyCode === 37) {
                view.get('controller.controllers.PhotosPhoto').send('backwards', view.get('controller').content);
            }

        }
    }),
    didInsertElement: function() {
        //fix for catching key events
        this.$().attr('tabindex', 0);
        this.$().focus();

        this.setViewerHeight();
        $('.photo').imagesLoaded(function() {
            $('.full-size-photo-viewer').css('opacity', 1);
        });

        var self = this;
        $(window).resize(function() {
            self.setViewerHeight();
        });
    },
    setViewerHeight: function() {
        var height = $(window).height() - 50;
        $('.photo').height(height);
        $('.side-panel').height(height);
    }
});
