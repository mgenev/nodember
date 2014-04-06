Ember.Handlebars.helper("cleanUrl", function(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
});

