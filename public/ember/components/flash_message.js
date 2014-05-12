App.XWoofMessageComponent = Ember.Component.extend({
  classNames: ['x-woof-message-container'],
  classNameBindings: ['insertState'],
  insertState: 'pre-insert',
  didInsertElement: function() {
    var self = this;
    self.$().bind('webkitTransitionEnd', function(event) {
      if (self.get('insertState') === 'destroyed') {
        self.woof.removeObject(self.get('message'));
      }
    });
    Ember.run.later(function() {
      self.set('insertState', 'inserted');
    }, 250);
    
    if (self.woof.timeout) {
      Ember.run.later(function() {
        self.set('insertState', 'destroyed');
      }, self.woof.timeout);
    }
  },

  click: function() {
    var self = this;
    self.set('insertState', 'destroyed');
  }
});