App.FileUploadDraggableComponent = Ember.Component.extend(App.DroppableMixin, {
    classNames: ['basket'],
    drop: function(e) {
        e.stopPropagation(); // Stops some browsers from redirecting.
        e.preventDefault();

        var files = e.dataTransfer.files;
        var uploadUrl = this.get('url');

        var uploader = Ember.Uploader.create({
            url: uploadUrl
        });

        uploader.on('progress', function(e) {
            // Handle progress changes
            // Use `e.percent` to get percentag

            $('.upload-progress').html(e.percent + '%');
        });

        uploader.on('didUpload', function(e) {
            // Handle finished upload
            $('.upload-progress').html('Upload finished'); 
        });

        if (!Ember.isEmpty(files)) {
            uploader.upload(files[0]);
        }
    }
});
