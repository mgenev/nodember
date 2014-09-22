App.User = DS.Model.extend({
	name: DS.attr('string'),
    email: DS.attr('string'),
    username: DS.attr('string'),
    articles: DS.hasMany('article'),
    photos: DS.hasMany('photo'),
    vendors: DS.hasMany('vendor')
});

App.UserSerializer = App.ApplicationSerializer.extend({
    attrs: {
        photos: {
            embedded: 'always'
        },
        vendors: {
            embedded: 'always'
        },
        articles: {
            embedded: 'always'
        }
    }
});
