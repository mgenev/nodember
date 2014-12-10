App.Homepage = DS.Model.extend({
    // relatioships
    user: DS.belongsTo('user'),
    vendor: DS.belongsTo('vendor'),
    // template: DS.belongsTo('template'),
    homepageTemplate : DS.attr(),
    homepageTemplateName: DS.attr('string'),
    // attributes
    name: DS.attr('string'),
    pageContent: DS.attr(),
    urlSegment: DS.attr('string'),

    // computed
    slug: function() {
        var slug = this.get('name').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        this.set('urlSegment', slug);
        return slug;
    }.property('name')
});

App.HomepageSerializer = App.ApplicationSerializer.extend({
    attrs: {
        user: {
            embedded: 'always'
        },
        vendor: {
            embedded: 'always'
        },
        // template: {
        //     embedded: 'always'
        // }
    }
});