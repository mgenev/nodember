Ember.Woof = Ember.ArrayProxy.extend({
  content: Ember.A(),
  timeout: 2000,
  pushObject: function(object) {
    object.typeClass = 'alert-' + object.type;
    this._super(object);
  },
  danger: function(message) {
    this.pushObject({
      type: 'danger',
      message: message
    });
  },
  warning: function(message) {
    this.pushObject({
      type: 'warning',
      message: message
    });
  },
  info: function(message) {
    this.pushObject({
      type: 'info',
      message: message
    });
  },
  success: function(message) {
    this.pushObject({
      type: 'success',
      message: message
    });
  }
});
