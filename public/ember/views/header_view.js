App.HeaderView = Ember.View.extend({
    templateName: 'header',
    user: global.user,
    authenticated: global.authenticated,
    menu: [{
        'title': 'Articles',
        'link': 'articles',
        'submenu': [{
            'title': 'Index',
            'link': 'articles'
        }, {
            'title': 'Create New Article',
            'link': 'articles.create'
        }]
    }, {
        'title': 'Photos',
        'link': 'photos',
        'submenu': [{
            'title': 'Index',
            'link': 'photos'
        }, {
            'title': 'Upload New Photo',
            'link': 'photos.create'
        }, ]
    }]
});
