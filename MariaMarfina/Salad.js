var Product = require('./Product');

function Salad(salad, grams) {
  Product.call(this);

  var gramsPerServing = 100;

  this.type = salad.type;
  this.price = salad.price * (grams / gramsPerServing);
  this.calories = salad.calories * (grams / gramsPerServing);
}

Salad.CAESAR = {
  type: "caesar", 
  price: 100, 
  calories: 20
};
Salad.OLIVIER = {
  type: "olivier", 
  price: 50, 
  calories: 80
};

Salad.prototype = Object.create(Product.prototype);

module.exports = Salad;