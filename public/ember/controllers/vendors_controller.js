App.VendorsCreateController = Ember.ObjectController.extend({
    needs: ['vendors'],
    actions: {
        createVendor: function() {
            var vendor = this.model,
                self = this;

            function transitionToVendor(vendor) {
                self.transitionToRoute('vendors.vendor', vendor);
            }

            function failure(reason) {
                // handle the error
                alert(reason);
            }

            vendor.save().then(transitionToVendor).catch(failure);
        }
    }
});


App.VendorsVendorController = Ember.ObjectController.extend({
    needs: ['vendors'],
    actions: {
        editVendor: function() {
            this.set('isEditing', true);
        },
        saveEdit: function() {
            this.set('isEditing', false);

            var vendor = this.model;
            vendor.save();

            this.transitionToRoute('vendors.vendor', vendor);
        }
    },
    isEditing: false
});
