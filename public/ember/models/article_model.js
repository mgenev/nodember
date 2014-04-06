  // Article
  App.Article = DS.Model.extend({
    title: DS.attr('string'),
    articleContent: DS.attr('string'),
    type: DS.attr('string'),
    urlSegment: DS.attr('string'),
    slug: function() {
		var slug = this.get('title').toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
		this.set('urlSegment', slug);
      return slug;
  }.property('title')
  });