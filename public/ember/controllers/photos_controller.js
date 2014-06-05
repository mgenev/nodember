App.PhotosCreateController = Ember.Controller.extend({
    actions: {
        uploadPhoto: function() {
           
        }
    }
});


App.PhotosPhotoController = Ember.Controller.extend({    
    actions: {
        editPhoto: function() {
            this.set('isEditing', true);
        },
        saveEdit: function() {
            this.set('isEditing', false);

            var photo = this.content;
            photo.save();

            this.transitionToRoute('photoz.photo', photo);
        },
        deletePhoto: function () {
            
        }
    },
    isEditing: false
});

App.PhotosIndexController = Ember.Controller.extend({    
    actions: {
        viewer: function() {
            alert('bam');
        }        
    }
});
