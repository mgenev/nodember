App.HomepagesRoute = Ember.Route.extend({

    beforeModel: function() {
        var self = this;
        var templates = Ember.$.get('templates').done(function() {
            //TODO switch to controller for homepages.create or homepagesCreate and look in that controller with shorter syntax
            self.controllerFor('homepages').set('templates', templates.responseJSON.templates);
        });
    }
});

App.HomepagesIndexRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('homepage');
    }
});

App.HomepagesHomepageRoute = Ember.Route.extend({
    model: function (params) {
      return this.store.find('homepage', params.homepage_id);
    }
});

App.HomepagesCreateRoute = Ember.Route.extend({
    model: function () {
    	console.log('u run??');
       return this.store.createRecord('homepage', {homepageTemplate: {},pageContent: '', name: ''});
    }
});
