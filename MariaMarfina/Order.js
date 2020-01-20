function Order(items) { 
  this.items = items;
  this.totalPrice = 0;
  this.totalCalories = 0;
  this.isPaid = false;
}

Order.prototype.getTotalPrice = function() {
  this.totalPrice = this.items.reduce(function(sum, item) {
    return sum + item.getPrice();
  }, 0);

  return this.totalPrice;
}

Order.prototype.getTotalCalories = function() {
  this.totalCalories = this.items.reduce(function(sum, item) {
      return sum + item.getCalories();
    }, 0);

  return this.totalCalories;
}

Order.prototype.getItems = function() {  
  return this.items;
}

Order.prototype.pay = function(money) {
  if ( !this.isPaid && (money == this.totalPrice) ) {
    this.isPaid = true;
    return 'You successfully paid your bill';
  } 
  if ( !this.isPaid && (money > this.totalPrice) ) {
    this.isPaid = true;
    return 'You successfully paid your bill. Here\'s your change: ' + (Math.ceil(money - this.totalPrice)) + ' tugr.';
  } 
  if ( !this.isPaid && (money < this.totalPrice) ) {
    return 'There\'s not enough money for your order. You should pay ' + this.totalPrice + ' tugr.';
  }
  return 'You\'ve already paid your bill.';
}

Order.prototype.add = function(items) {
  if (!this.isPaid) {
    this.items = this.items.concat(items)
    return 'You successfully added item(s) to your order.'
  }
  return 'Your payment was already processed. You can no longer add items.'
}

Order.prototype.delete = function() {
  if (!this.isPaid) {
    var args = [].slice.call(arguments);
  
    this.items = this.items.filter(function(item) {
      return args.indexOf(item) < 0; 
    })
    return 'You successfully removed item(s) from your order.'
  }
  return 'Your payment was already processed. You can no longer delete items.'
}
module.exports = Order;