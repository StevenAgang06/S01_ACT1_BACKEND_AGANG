// Creating an object
const products = {
  name: [
    ["Nike", "Addidas", "Puma"],
    ["Black T-shirt", "White T-shirt", "Red T-shirt"],
    ["Black Pants", "Blue Jeans", "Red Pants"],
  ],

  price: [
    [100, 150, 50],
    [50, 75, 25],
    [150, 60, 40],
  ],

  stock: [
    [10, 15, 20],
    [7, 4, 8],
    [2, 9, 7],
  ],

  category: [["Shoes"], ["T-shirt"], ["Pants"]],
};

// Displaying all products and its information

for (let iterator = 0; iterator < products.category.length; iterator++) {
  console.log("Products Category: " + products.category[iterator]);
  console.log("Products Name: " + products.name[iterator]);
  console.log("Products Price: " + products.price[iterator]);
  console.log("Products Stocks: " + products.stock[iterator]);
  console.log("\n");
}

// Adding pre-defined product
products.name.push(["sandal for women", "dress", "lotion"]);
products.price.push([20, 40, 60]);
products.stock.push([10, 10, 5]);
products.category.push(["Women"]);

// Editing pre-defined product

console.log("Editing this item...");
console.log("Category: " + products.category[0]);
console.log("Product Name: " + products.name[0]);
console.log("Product Price: " + products.price[0]);
console.log("Product Stocks: " + products.stock[0]);

products.name[0] = ["FUBU", "JORDAN", "CLARKS"];
products.price[0] = [100, 50, 25];
products.stock[0] = [100, 100, 100];
console.log("Done.. Displaying the products again... \n \n");

for (let iterator = 0; iterator < products.category.length; iterator++) {
  console.log("Products Category: " + products.category[iterator]);
  console.log("Products Name: " + products.name[iterator]);
  console.log("Products Price: " + products.price[iterator]);
  console.log("Products Stocks: " + products.stock[iterator]);
  console.log("\n");
}

// Emptying selected products

console.log(
  "The following items will be remove: " + products.name[2][0],
  products.price[2][0],
  products.stock[2][0],
  products.category[2][0]
);
products.name[2][0] = undefined;
products.price[2][0] = undefined;
products.stock[2][0] = undefined;
products.category[2][0] = undefined;
console.log("Done.. Displaying the products again... \n \n");

for (let iterator = 0; iterator < products.category.length; iterator++) {
  console.log("Products Category: " + products.category[iterator]);
  console.log("Products Name: " + products.name[iterator]);
  console.log("Products Price: " + products.price[iterator]);
  console.log("Products Stocks: " + products.stock[iterator]);
  console.log("\n");
}
