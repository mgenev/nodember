var App = window.App = Ember.Application.create();
App.ApplicationSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    primaryKey: '_id'
});


/* Order and include as you please. */
require('ember/mixins/*');
require('ember/controllers/*');
require('ember/models/*');
require('ember/routes/*');
require('ember/views/*');
require('ember/components/*');
require('ember/router');
require('ember/helpers/*');
require('ember/addons/*');
require('ember/initializers/*');
require('ember/utils/*');
