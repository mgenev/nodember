(function() {

var App = window.App = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

    // // Articles
    // App.ArticlesIndexController = Ember.ArrayController.extend({


    // });

    App.ArticlesCreateController = Ember.Controller.extend({
         actions: {
            createArticle: function() {

                var article = this.store.createRecord('article', {
                    title: $(title).val(),
                    articleContent: $(articleContent).val()
                });

                var self = this;

                function transitionToArticle(article) {
                  self.transitionToRoute('articles.view', article);
                }

                function failure(reason) {
                  // handle the error
                  alert(reason);
                }

                article.save().then(transitionToArticle).catch(failure);
            }
        }

    });


})();

(function() {

  // Article
  App.Article = DS.Model.extend({
    title: DS.attr('string'),
    articleContent: DS.attr('string')
  });

})();

(function() {

App.ApplicationRoute = Ember.Route.extend({
});


})();

(function() {

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
            }
    }
});

})();

(function() {

App.HeaderView = Ember.View.extend({
    templateName: 'header',
    menu: [{
        'title': 'Articles',
        'link': 'articles'
    }, {
        'title': 'Create New Article',
        'link': 'articles.create'
    }, {
        'title': 'Articles Drop',
        'link': 'articles',
        'submenu': [{
            'title': 'Articles List',
            'link': 'articles'
        }, {
            'title': 'Create New Article',
            'link': 'articles.create'
        }]
    }]
});


})();

(function() {

App.Router.map(function () {
	
	this.resource('articles', function() {
    	this.route('create', { path: '/create' });
    	this.route('view', { path: ':article_id' });
    	this.route('edit', { path: '/edit/:article_id/' });
  });
    
});


})();

(function() {

var DateFormats = {
       short: "DD MMMM - YYYY",
       long: "dddd DD.MM.YYYY HH:mm"
};

Ember.Handlebars.helper("formatDate", function(datetime, format) {
  if (moment) {
    f = DateFormats[format];
    return moment(datetime).format(f);
  }
  else {
    return datetime;
  }
});

Ember.Handlebars.helper("test", function(text, url) {
	return new Ember.Handlebars.SafeString(
    "<a href='" + url + "'>" + text + "</a>"
  );
});

})();

(function() {

App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});

})();