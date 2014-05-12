App.ApplicationRoute = Ember.Route.extend({
    model: function() {
        // return this.store.find('admin', '53694c9ecd2fdd72457e95c3');
    },
    activate: function() {
        if (window.flash) {
            this.woof.danger(window.flash);    
        }        
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
        },
        addDanger: function() {
            this.woof.danger('This is a danger alert!');
        },
        addWarning: function() {
            this.woof.warning('This is a warning alert!');
        },
        addInfo: function() {
            this.woof.info('This is an info alert!');
        },
        addSuccess: function() {
            this.woof.success('This is a success alert!');
        }
    }
});