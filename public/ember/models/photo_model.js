   // Article
  App.Photo = DS.Model.extend({
      user: DS.belongsTo('user'),
      name: DS.attr('string'),
      path: DS.attr('string'),
      src: function() {
          return this.get('path') + this.get('name');
      }.property('path', 'name')
  });
