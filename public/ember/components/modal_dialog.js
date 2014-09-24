App.ModalDialogComponent = Ember.Component.extend({
    didInsertElement: function() {
        $('#modalDialog').modal({
            'show': true
        });
    },
    willDestroyElement: function() {
		$('#modalDialog').modal('hide');
    }
});
