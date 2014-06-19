App.DroppableMixin = Ember.Mixin.create({
  dragOver: function(ev) {
    this.$().addClass('drag-enter');
    return ev.preventDefault();
  },
  dragLeave: function() {
    return this.$().removeClass('drag-enter');
  }
});