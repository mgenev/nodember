var App = window.App = Ember.Application.create();

App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});

/* Order and include as you please. */

require('ember/controllers/*');
require('ember/models/*');
require('ember/routes/*');
require('ember/views/*');
require('ember/router');
require('ember/util/*');
require('ember/util/helpers/*');
