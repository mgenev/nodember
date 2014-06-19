App.PhotosCreateController = Ember.Controller.extend({
    actions: {
        uploadPhoto: function() {

        }
    }
});

App.PhotosPhotoController = Ember.Controller.extend({
    needs: ['photos'],
    getPhotoIdList: function() {
        var photosController = this.get('controllers.photos');
        var photos = photosController.get('content');
        if (!Em.isEmpty(photos)) {
            return photos.map(function(record) {
                return record.get('id');
            });
        }
        return [];
    },
    getNextId: function(direction, model) {
        if (!model) {
            var currentId = this.get('model').id;    
        } else {
            var currentId = model.id;
        }
        
        var photoIdList = this.getPhotoIdList();
        var currentIdIndex = photoIdList.indexOf(currentId);
        var nextId;

        if (direction === 'forward') {
            if (currentIdIndex + 1 === photoIdList.length) {
                nextId = photoIdList[0];
            } else {
                nextId = photoIdList[currentIdIndex + 1];
            }
        } else if (direction === 'backwards') {
            if (currentIdIndex === 0) {
                nextId = photoIdList[photoIdList.length - 1];
            } else {
                nextId = photoIdList[currentIdIndex - 1];
            }
        }
        return nextId;
    },
    actions: {
        forward: function(model) {
            this.transitionToRoute('photos.photo', this.getNextId('forward', model));
        },
        backwards: function(model) {
            this.transitionToRoute('photos.photo', this.getNextId('backwards', model));
        },
        close: function (model) {
            console.log('close hit');
            this.transitionToRoute('photos');
        }
    },
    isEditing: false
});
