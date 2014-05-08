App.IndexRoute = Ember.Route.extend({
  model: function() {
    return Em.Object.create({name: 'king kong'});
  }
});