App.Vendor = DS.Model.extend({
    user: DS.belongsTo('user'),
    name: DS.attr('string'),
    description: DS.attr('string'),
    urlSegment: DS.attr('string'),
    slug: function() {
        var slug = this.get('name').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        this.set('urlSegment', slug);
        return slug;
    }.property('name')
});

App.VendorSerializer = App.ApplicationSerializer.extend({
    attrs: {
        user: {
            embedded: 'always'
        }
    }
});
