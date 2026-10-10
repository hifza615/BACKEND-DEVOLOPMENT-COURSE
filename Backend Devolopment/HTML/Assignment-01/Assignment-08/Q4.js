
let inventory = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// Add a new product
inventory.set("mangoes", 150);

// Update an existing product
inventory.set("apples", 600);

// Retrieve quantity
console.log("Apple Quantity:", inventory.get("apples"));

// Check whether a product exists
console.log("Has Bananas:", inventory.has("bananas"));

// Remove a product
inventory.delete("oranges");

// Display current size
console.log("Number of Products:", inventory.size);

// Display all product names
console.log("Product Names:", [...inventory.keys()]);

// Display all quantities
console.log("Product Quantities:", [...inventory.values()]);

// Display each product and quantity
inventory.forEach((quantity, product) => {
    console.log(product + ": " + quantity);
});

// Empty the inventory
inventory.clear();

console.log("Final Inventory Size:", inventory.size);

