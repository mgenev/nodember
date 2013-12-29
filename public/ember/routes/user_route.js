Emberapp.UserRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('user', model.user_id);
  }
});

