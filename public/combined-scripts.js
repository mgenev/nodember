(function() {

var App = window.App = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

App.ArticlesCreateController = Ember.Controller.extend({
    needs: ['articles'],
    actions: {
        createArticle: function() {

            var article = this.article;
            article.set('title', $(title).val());
            article.set('articleContent', $(articleContent).val());
            article.set('type', $('input[name=types]:checked').val());

            var self = this;

            function transitionToArticle(article) {
                self.transitionToRoute('articles.view', article);
            }

            function failure(reason) {
                // handle the error
                alert(reason);
            }

            article.save().then(transitionToArticle).
            catch (failure);
        }
    }
});


App.ArticlesEditController = Ember.Controller.extend({
    needs: ['articles'],
    actions: {
        editArticle: function() {
            var article = this.article;
            article.set('title', $(title).val());
            article.set('articleContent', $(articleContent).val());
            article.set('type', $('input[name=types]:checked').val());
            article.save();

            this.transitionToRoute('articles.view', article);
        }
    }
});

App.ArticlesController = Ember.Controller.extend({
    types: {
        'name' : 'types',
        'question' : 'Type',
        'choices' : [ 'Blog', 'Article', 'Newsflash'],
        'answer' : 'Blog'
    },
});

})();

(function() {

  // Article
  App.Article = DS.Model.extend({
    title: DS.attr('string'),
    articleContent: DS.attr('string'),
    type: DS.attr('string'),
    urlSegment: DS.attr('string'),
    slug: function() {
		var slug = this.get('title').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
		this.set('urlSegment', slug);
      return slug;
  }.property('title')
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
    model: function () {
       return this.store.createRecord('article', {title: '', pageContent: '', urlSegment: ''});
    },
    setupController: function(controller, model) {
        controller.set('article', model);
    }
});


App.ArticlesEditRoute = Ember.Route.extend({
    model: function (params) {
      return this.store.find('article', params.article_id);
    },
    setupController: function(controller, model) {
        controller.set('article', model);
    }
});

})();

(function() {

App.CatchallRoute = Ember.Route.extend({
    model: function(params) {
        // Alternative
        // return Ember.$.get('articles', {
        //     urlSegment: params.url
        // });

		return this.store.find('article', {urlSegment: params.url});
    }
});


})();

(function() {

App.HeaderView = Ember.View.extend({
    templateName: 'header',
    user: global.user,
    authenticated: global.authenticated,
    menu: [{
        'title': 'Articles',
        'link': 'articles'
    },
    {
        'title': 'New thing',
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

App.RadioButton = Ember.Component.extend({
    tagName : "input",
    type : "radio",
    attributeBindings : [ "name", "type", "value", "checked:checked" ],
    click : function() {
        this.set("selection", this.$().val());
    },
    checked : function() {
        return this.get("value") === this.get("selection");
    }.property('selection')

});

})();

(function() {

App.Router.map(function () {
	this.route('catchall', { path: '/*url'});  // catch-all routes

	this.resource('articles', function() {
		this.route('create', { path: '/create' });
		this.route('view', { path: ':article_id' });
		this.route('edit', { path: '/edit/:article_id/' });
  });    
});


})();

(function() {

Ember.Handlebars.helper("cleanUrl", function(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
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

Ember.Handlebars.helper('radio-button', App.RadioButton);

})();

(function() {

App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});

})();//@ sourceMappingURL=combined-scripts.js.map