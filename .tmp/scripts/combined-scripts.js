(function() {

var App = window.App = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

  // // Articles
  // App.ArticlesIndexController = Ember.ArrayController.extend({

  	
  // });

})();

(function() {

App.Store = DS.Store.extend();

  // Store
  App.Adapter = DS.RESTAdapter.extend();
  App.Adapter.configure('App.Article', {
    primaryKey: '_id'
  });

  App.Store = DS.Store.extend({
    revision: 12,
    adapter: App.Adapter.create()
  });

  // To represent embedded objects
  DS.JSONTransforms['object'] = {
    deserialize: function(serialized) {
      return Ember.isNone(serialized) ? {} : serialized;
    },
    serialize: function(deserialized) {
      return Ember.isNone(deserialized) ? {} : deserialized;
    }
  }

})();

(function() {

  // Article
  App.Article = DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    created: DS.attr('date'),
    user: DS.attr('string')
  });

})();

(function() {

App.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});


})();

(function() {

App.ArticlesIndexRoute = Ember.Route.extend({
    model: function () {
      return this.store.find('article');
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
    	this.route('view', { path: '/view' });
    	this.route('edit', { path: '/edit' });
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