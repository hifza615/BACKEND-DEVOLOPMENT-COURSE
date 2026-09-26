// Question 5 

let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"];

// length
console.log("Number of products:", products.length);

// at()
console.log("First product:", products.at(0));
console.log("Last product:", products.at(-1));

// push()
products.push("Webcam");
console.log("After push:", products);

// unshift()
products.unshift("Printer");
console.log("After unshift:", products);

// pop()
products.pop();
console.log("After pop:", products);

// shift()
products.shift();
console.log("After shift:", products);

// Second product array
let moreProducts = ["USB Cable", "Speaker", "Microphone"];

// concat()
let allProducts = products.concat(moreProducts);
console.log("After concat:", allProducts);

// slice()
let smallList = allProducts.slice(1, 4);
console.log("Small product list:", smallList);

// splice() - replace a product
allProducts.splice(2, 1, "Gaming Mouse");
console.log("After splice:", allProducts);

// join()
console.log("Final product list:", allProducts.join(", "));

// Arrow function
let showProducts = (products) => {
    console.log("Final Array:", products);
};

showProducts(allProducts);

// Array.isArray()
console.log("Is final product list an array?", Array.isArray(allProducts));