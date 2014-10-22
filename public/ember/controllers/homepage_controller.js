App.HomepagesCreateController = Ember.ObjectController.extend({
    needs: ['homepages'],
    homepageTemplate: '',
    actions: {
        createHomepage: function() {
            var homepage = this.model,
                self = this;
            console.log('MODEL', this.model);

            function transitionToHomepage(homepage) {
                self.transitionToRoute('homepages.homepage', homepage);
            }

            function failure(reason) {
                // handle the error
                alert(reason);
            }

            homepage.save().then(transitionToHomepage).
            catch (failure);
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