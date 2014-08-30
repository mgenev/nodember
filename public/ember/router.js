App.Router.map(function() {
    this.route('catchall', {
        path: '/*url'
    }); // catch-all routes

    this.resource('users', function() {
        this.route('user', {
            path: ':user_id'
        });
    });
    
    this.route('profile');

    this.resource('articles', function() {
        this.route('create', {
            path: '/create'
        });
        this.route('article', {
            path: ':article_id'
        });
    });

    this.resource('photos', function() {
        this.route('create', {
            path: '/create'
        });
        this.route('photo', {
            path: ':photo_id'
        });
    });

    this.resource('store', function() {});

    // auth 
    this.route('protected');
    this.route('login');
    this.route('signup');
});
