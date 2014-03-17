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
