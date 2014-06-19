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

        if (!Ember.isEmpty(files)) {
            uploader.upload(files[0]);
        }
    }
});
