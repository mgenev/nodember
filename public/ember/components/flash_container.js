App.XWoofComponent = Ember.Component.extend({
  classNames: 'woof-messages',
  messages: Ember.computed.alias('woof')
});
