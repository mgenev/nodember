  // Article
  App.Article = DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    created: DS.attr('date')
  });