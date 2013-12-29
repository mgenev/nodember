Emberapp.ArticlesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('article');
  }
});

