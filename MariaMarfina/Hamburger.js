var Product = require('./Product');

function Hamburger(size, stuffing) {
  Product.call(this);

  this.size = size;
  this.stuffing = stuffing;
  this.price = size.price + stuffing.price;
  this.calories = size.calories + stuffing.calories;
}

Hamburger.SIZE_SMALL = {
  type: "small", 
  price: 50, 
  calories: 20
};
Hamburger.SIZE_LARGE = {
  type: "large", 
  price: 100, 
  calories: 40
};
Hamburger.STUFFING_CHEESE = {
  type: "cheese", 
  price: 10, 
  calories: 20
};
Hamburger.STUFFING_SALAD = {
  type: "salad", 
  price: 20, 
  calories: 5
};
Hamburger.STUFFING_POTATO = {
  type: "potato", 
  price: 15, 
  calories: 10
};

Hamburger.prototype = Object.create(Product.prototype);

module.exports = Hamburger;