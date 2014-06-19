App.CartView = Ember.View.extend(App.DroppableMixin,{
  templateName: 'cart',
  classNames: ['basket'],
  drop: function(ev) {
    var controller, current_item, id, in_current_line_items, record;
    id = ev.dataTransfer.getData('text/data');
    controller = this.get('controller');
    in_current_line_items = controller.get('line_items').filter(function(item) {
      return item.id === Number(id);
    });
    if (Ember.isEmpty(in_current_line_items)) {
      record = controller.findProperty('id', Number(id));
      record.quantity = 1;
      return controller.get('line_items').pushObject(record);
    } else {
      current_item = in_current_line_items[0];
      return Ember.setProperties(current_item, {
        quantity: current_item.quantity + 1
      });
    }
  }
});