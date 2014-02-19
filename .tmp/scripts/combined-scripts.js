(function() {

var App = window.App = Ember.Application.create();
App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});

/* Order and include as you please. */


})();

(function() {

    // // Articles
    // App.ArticlesIndexController = Ember.ArrayController.extend({


    // });

   App.ArticlesEditController = Ember.ArrayController.extend({
           actions: {
               editArticle: function() {
                 var article = this.get('model');
                 article.save();
               }
           }
   });



   App.ArticlesCreateController = Ember.Controller.extend({
           actions: {
               createArticle: function() {
                  this.store.createRecord('article', { 
                  	title: title,
  					content: content
  				});
               }
           }
   });


})();

(function() {

  // Article
  App.Article = DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    created: DS.attr('date'),
    user: DS.attr('string'),
    _id: DS.attr('string')
  });

})();

(function() {

App.ApplicationRoute = Ember.Route.extend({
});


})();

(function() {

App.ArticlesIndexRoute = Ember.Route.extend({
    model: function () {
    App.ApplicationSerializer = DS.RESTSerializer.extend({
  	primaryKey: '_id'
	});
      return this.store.find('article');
    }
});

App.ArticlesViewRoute = Ember.Route.extend({
    model: function (params) {
      return this.store.find('article', params._id);
    }
});


// App.ArticlesCreateRoute = Ember.Route.extend({
//     model: function (params) {
//       return this.store.create('article');
//     }
// });


App.ArticlesEditRoute = Ember.Route.extend({
    model: function (params) {
      return this.store.find('article', params._id);
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
    	this.route('edit', { path: ':article_id/edit' });
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