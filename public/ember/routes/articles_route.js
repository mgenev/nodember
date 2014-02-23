App.ArticlesIndexRoute = Ember.Route.extend({
    model: function () {
    	return this.store.find('article');
    }
});

App.ArticlesViewRoute = Ember.Route.extend({
    model: function (params) {
      return this.store.find('article', params.article_id);
    }
});


App.ArticlesCreateRoute = Ember.Route.extend({

});


App.ArticlesEditRoute = Ember.Route.extend({
 	model: function (params) {
      return this.store.find('article', params.article_id);
    },
     actions: {
            editArticle: function() {
                var article = this.get('model');
                article.save();
            }
    }
});