App.Router.map(function() {
    this.route('catchall', {
        path: '/*url'
    }); // catch-all routes

    this.resource('users', function() {
        this.route('user', {
            path: ':user_id'
        });
    });

    this.resource('profile');

    this.resource('articles', function() {
        this.route('create');
        this.route('article', {
            path: ':article_id'
        });
    });

    this.resource('vendors', function() {
        this.route('create');
        this.route('vendor', {
            path: ':vendor_id'
        });
    });

    this.resource('homepages', function() {
        this.route('create');
        this.route('homepage', {
            path: ':homepage_id'
        });
    });

    this.resource('photos', function() {
        this.route('create');
        this.route('photo', {
            path: ':photo_id'
        });
    });

    this.resource('templates', function() {
        this.route('create');
        this.route('load');
        this.route('template', {
            path: ':template_id'
        });
    });

    this.resource('store', function() {});

    // auth 
    this.route('protected');
    this.route('login');
    this.route('signup');
});
