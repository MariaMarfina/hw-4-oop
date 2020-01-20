var Product = require('./Product');

function Drink(drinkOptions) { 
  Product.call(this);

  this.type = drinkOptions.type;
  this.price = drinkOptions.price;
  this.calories = drinkOptions.calories;
}

Drink.COLA = {
  type: 'cola', 
  price: 50, 
  calories: 40
};
Drink.COFFEE = {
  type: 'coffee', 
  price: 80, 
  calories: 20
};

Drink.prototype = Object.create(Product.prototype);

module.exports = Drink;