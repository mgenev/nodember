App.HomepagesCreateController = Ember.ObjectController.extend({
    needs: ['homepages', 'application'],
    currentUser: function() {
        return this.get('controllers.application.currentUser');
    }.property('controllers.application.currentUser'),
    homepageTemplate: '',
    actions: {
        createHomepage: function() {
            var homepage = this.model,
                self = this;            
            console.log('CURRENT USER OBJ, ', this.get('currentUser'));
            this.store.pushPayload({user: this.get('currentUser')});
            console.log('the model!!', this.model);
            var user = this.store.getById('user', this.get('currentUser.id'));

            homepage.set('user', user);
            // TODO get vendor from somewhere?
            // homepage.set('vendor', vendor);

            homepage.save().then(transitionToHomepage).catch (failure);

            function transitionToHomepage(homepage) {
                self.transitionToRoute('homepages.homepage', homepage);
            }

            function failure(reason) {
                // handle the error
                alert(reason);
            }
        }
    }
});


App.HomepagesHomepageController = Ember.ObjectController.extend({
    needs: ['homepages'],
    actions: {
        editHomepage: function() {
            this.set('isEditing', true);
        },
        saveEdit: function() {
            this.set('isEditing', false);

            var homepage = this.model;
            homepage.save();

            this.transitionToRoute('homepages.homepage', homepage);
        }
    },
    isEditing: false
});

App.HomepagesController = Ember.Controller.extend({});