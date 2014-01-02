App.Store = DS.Store.extend();

  // Store
  App.Adapter = DS.RESTAdapter.extend();
  // App.Adapter.configure('App.Article', {
  //   primaryKey: '_id'
  // });

  App.Store = DS.Store.extend({
    revision: 12,
    adapter: App.Adapter.create()
  });

  // To represent embedded objects
  DS.JSONTransforms['object'] = {
    deserialize: function(serialized) {
      return Ember.isNone(serialized) ? {} : serialized;
    },
    serialize: function(deserialized) {
      return Ember.isNone(deserialized) ? {} : deserialized;
    }
  }