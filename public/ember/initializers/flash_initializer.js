Ember.Application.initializer({
  name: "registerWoofMessages",

  initialize: function(container, application) {
    application.register('woof:main', Ember.Woof);
  }
});

Ember.Application.initializer({
  name: "injectWoofMessages",

  initialize: function(container, application) {
    application.inject('controller', 'woof', 'woof:main');
    application.inject('component',  'woof', 'woof:main');
    application.inject('route',      'woof', 'woof:main');
  }
});
