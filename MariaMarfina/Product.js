function Product() {
}

Product.prototype.getPrice = function() {
  return this.price;
}

Product.prototype.getCalories = function() {
  return this.calories;
}

module.exports = Product;