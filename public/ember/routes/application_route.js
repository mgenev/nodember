App.ApplicationRoute = Ember.Route.extend({
    model: function() {
        // return this.store.find('admin', '53694c9ecd2fdd72457e95c3');
    },
    actions: {
        openModal: function(modalName, model) {
            this.controllerFor(modalName).set('model', model);
            this.render(modalName, {
                into: 'application',
                outlet: 'modal'
            });
        },
        closeModal: function() {
            this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'application'
            });
        }
    }
});
