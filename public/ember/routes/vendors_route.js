App.VendorsIndexRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('vendor');
    }
});

App.VendorsVendorRoute = Ember.Route.extend({
    model: function (params) {
      return this.store.find('vendor', params.vendor_id);
    }
});

App.VendorsCreateRoute = Ember.Route.extend({
    model: function () {
       return this.store.createRecord('vendor', {name: '', description: '', urlSegment: ''});
    }
});
