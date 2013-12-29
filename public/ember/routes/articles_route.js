App.ArticlesIndexRoute = Ember.Route.extend({
    model: function () {
      return App.Article.find({});
    }
});

