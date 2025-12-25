// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
  // Initialize items property
  this.items = [];
}
// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function (price) {
  this.items.push(price);
};
// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function () {
  return this.items.reduce((acc, price) => acc + price, 0);
};

const cart = new ShoppingCart();

cart.addItem(10);
cart.addItem(20);
cart.addItem(30);

// Print items and total price
console.log("Items in cart:", cart.items);
console.log("Total Price:", cart.getTotalPrice());
