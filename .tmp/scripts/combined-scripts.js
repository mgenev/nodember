(function() {

var Emberapp = window.Emberapp = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

Emberapp.Store = DS.Store.extend();
Emberapp.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {

  // Article
  Emberapp.Article = DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string')
  });

})();

(function() {

Emberapp.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});


})();

(function() {

Emberapp.ArticlesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('article');
  }
});



})();

(function() {

Emberapp.HeaderView = Ember.View.extend({
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

Emberapp.Router.map(function () {
	
	this.resource('articles', function() {
    	this.route('create');
    	this.route('view');
    	this.route('edit');
  });
    
});


})();