App.HeaderView = Ember.View.extend({
        templateName: 'header',
        menu: [{
                'title': 'Index',
                'link': 'index'
            },{
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
