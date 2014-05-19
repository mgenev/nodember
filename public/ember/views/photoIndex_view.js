App.PhotosIndexView = Ember.View.extend({
    didInsertElement: function() {
        // Prepare layout options.
        var options = {
            autoResize: true, // This will auto-update the layout when the browser window is resized.
            container: $('#main'), // Optional, used for some extra CSS styling
            offset: 2, // Optional, the distance between grid items
            itemWidth: 210 // Optional, the width of a grid item
        };

        // Get a reference to your grid items.
        var handler = $('#tiles li');

        // Init lightbox
        $('a', handler).colorbox({
            rel: 'lightbox'
        });

        // Call the layout function after all images have loaded
        $('#tiles').imagesLoaded(function() {
            handler.wookmark(options);
        });

    }
});
