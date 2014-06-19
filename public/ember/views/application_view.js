App.ApplicationView = Ember.View.extend({
    didInsertElement: function() {
    	// preventing browser from opening dragged files
        $(document.body).bind("dragover", function(e) {
            e.preventDefault();
            return false;
        });

        $(document.body).bind("drop", function(e) {
            e.preventDefault();
            return false;
        });
    }
});
