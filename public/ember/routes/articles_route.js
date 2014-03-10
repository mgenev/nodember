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
                var article = this.currentModel;
                article.set('title', $(title).val());
                article.set('articleContent', $(articleContent).val());
                article.save();

                this.transitionTo('articles.view', article);
            }
    }
});