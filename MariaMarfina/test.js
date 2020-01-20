var Order = require('./Order');
var Product = require('./Product');
var Hamburger = require('./Hamburger');
var Salad = require('./Salad');
var Drink = require('./Drink');

var smallCheeseBurger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
var largeCaesarBowl = new Salad(Salad.CAESAR, 250);
var smallCaesarBowl = new Salad(Salad.OLIVIER, 100);
var coffee = new Drink(Drink.COFFEE);
var cola = new Drink(Drink.COLA);

var myOrder = new Order([smallCheeseBurger, largeCaesarBowl, cola]);

test('calculates total price after creating order', function() {
  expect(myOrder.getTotalPrice()).toBe(410);
})

test('calculates total calories amount after creating order', function() {
  expect(myOrder.getTotalCalories()).toBe(150);
})

test('returns correct message after paying less money than reqired', function() {
  expect(myOrder.pay(100)).toBe('There\'s not enough money for your order. You should pay 410 tugr.');
})

test('returns correct message after paying reguired amount of money', function() {
  expect(myOrder.pay(500)).toBe('You successfully paid your bill. Here\'s your change: 90 tugr.');
})

test('returns correct message after paying the processed bill', function() {
  expect(myOrder.pay(500)).toBe('You\'ve already paid your bill.');
})

test('returns correct message after adding item to the processed bill', function() {
  expect(myOrder.add(smallCaesarBowl)).toBe('Your payment was already processed. You can no longer add items.');
})

test('returns correct message after deleting item from the processed bill', function() {
  expect(myOrder.delete(cola)).toBe('Your payment was already processed. You can no longer delete items.');
})

test('doesn\'t change the price after adding item to the processed bill', function() {
  myOrder.add(smallCaesarBowl);
  expect(myOrder.getTotalPrice()).toBe(410);
})

test('doesn\'t change the calories amount after adding item to the processed bill', function() {
  myOrder.add(smallCaesarBowl);
  expect(myOrder.getTotalCalories()).toBe(150);
})

test('doesn\'t change the price after deleting item from the processed bill', function() {
  myOrder.delete(cola);
  expect(myOrder.getTotalPrice()).toBe(410);
})

test('doesn\'t change the calories amount after deleting item from the processed bill', function() {
  myOrder.delete(cola);
  expect(myOrder.getTotalCalories()).toBe(150);
})