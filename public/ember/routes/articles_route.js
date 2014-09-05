App.ArticlesIndexRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('article');
    }
});

App.ArticlesArticleRoute = Ember.Route.extend({
    model: function (params) {
      return this.store.find('article', params.article_id);
    }
});

App.ArticlesCreateRoute = Ember.Route.extend({
    model: function () {
       return this.store.createRecord('article', {title: '', articleContent: '', urlSegment: ''});
    }
});
