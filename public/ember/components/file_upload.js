App.FileUploadComponent = Ember.FileField.extend({
  url: '',
  multiple: true,
  filesDidChange: (function() {
    var uploadUrl = this.get('url');
    var files = this.get('files');

    var uploader = Ember.Uploader.create({
      url: uploadUrl
    });

    if (!Ember.isEmpty(files)) {
      uploader.upload(files);
    }
  }).observes('files')
});