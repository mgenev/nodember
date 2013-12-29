/*global Ember*/
Emberapp.User = DS.Model.extend({
    name: DS.attr('string'),

    zipcode: DS.attr('number')
});

// probably should be mixed-in...
Emberapp.User.reopen({
  // certainly I'm duplicating something that exists elsewhere...
  attributes: function(){
    var attrs = [];
    var model = this;
    Ember.$.each(Ember.A(Ember.keys(this.get('data'))), function(idx, key){
      var pair = { key: key, value: model.get(key) };
      attrs.push(pair);
    });
    return attrs;
  }.property()
});

// delete below here if you do not want fixtures
Emberapp.User.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    zipcode: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    zipcode: 'foo'
    
  }
  
];
