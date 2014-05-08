App.ModalDialogComponent = Ember.Component.extend({
    actions: {
        close: function() {
            return this.sendAction();
        }
    },
    didInsertElement: function() {
        $('#modalDialog').modal({
            'show': true
        });
    },
    willDestroyElement: function() {
		$('#modalDialog').modal('hide');
    }
});
