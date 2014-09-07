App.ProfileController = Ember.ObjectController.extend({
    needs: ['application'],
    currentUser: function() {
        return this.get('controllers.application.currentUser');
    },
    isEditing: false,
    actions: {
        edit: function() {
            this.set('isEditing', true);
            return false;
        },
        save: function() {
            this.set('isEditing', false);
            this.model.save();

        },
        createVendor: function () {
             this.transitionToRoute('vendors.create');
        }
    }
});
