App.StoreIndexController = Ember.ArrayController.extend({
  line_items: [],
  items_in_cart: (function() {
    return this.get('line_items');
  }).property('line_items'),
  total_price: (function() {
    var total;
    total = 0;
    if (this.get('line_items').length > 0) {
      this.get('line_items').forEach(function(line_item) {
        var quantity;
        quantity = line_item.quantity;
        return total += line_item.price * quantity;
      });
    }
    return total;
  }).property('line_items.@each.quantity')
});