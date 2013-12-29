App.ArticlesRoute = Ember.Route.extend({
    model: function () {
      return App.Article.find({});
    }
});

