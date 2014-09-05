var App = window.App = Ember.Application.create();

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

App.ApplicationSerializer = DS.RESTSerializer.extend({
    primaryKey: '_id'
});

App.ArticleSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    primaryKey: '_id',
    attrs: {
        user: {embedded: 'always'}
    }
})
