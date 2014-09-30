App.HeaderView = Ember.View.extend({
    templateName: 'header',
    menu: [{
        'title': 'Index',
        'link': 'index'
    }, {
        'title': 'Profile',
        'link': 'profile'
    }, {
        'title': 'Protected',
        'link': 'protected'
    }, {
        'title': 'Store',
        'link': 'store'
    }, {
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
        'title': 'Templates',
        'link': 'templates',
        'submenu': [{
            'title': 'Index',
            'link': 'templates'
        }, {
            'title': 'Create New Template',
            'link': 'templates.create'
        },
        {
            'title': 'Load Templates',
            'link': 'templates.load'
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
