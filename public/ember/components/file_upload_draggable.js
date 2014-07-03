App.FileUploadDraggableComponent = Ember.Component.extend(App.DroppableMixin, {
    classNames: ['basket'],
    drop: function(e) {
        e.stopPropagation(); // Stops some browsers from redirecting.
        e.preventDefault();

        var files = e.dataTransfer.files;
        var uploadUrl = this.get('url');
        var uploaded = 0;

        var uploader = Ember.Uploader.create({
            url: uploadUrl
        });

        uploader.on('progress', function(e) {
            // Handle progress changes
            // Use `e.percent` to get percentag

            // TODO this no longer makes sense till i can make individual file progress bars
            // $('.upload-progress').html(e.percent + '%');
        });

        uploader.on('didUpload', function(e) {
            // Handle finished upload
            uploaded++;
            $('.upload-progress').html('Upload ' + uploaded  + ' of ' + files.length +' finished'); 
        });

        if (!Ember.isEmpty(files)) {
            uploader.upload(files);
        }
    }
});
