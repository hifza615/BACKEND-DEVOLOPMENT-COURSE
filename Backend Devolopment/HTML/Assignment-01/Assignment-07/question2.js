let prices = [1200, 450, 3000, 750, 1500, 250];

// Display prices from lowest to highest
let ascendingPrices = prices.slice().sort((a, b) => a - b);
console.log("Lowest to Highest:", ascendingPrices);

// Display prices from highest to lowest
let descendingPrices = prices.slice().sort((a, b) => b - a);
console.log("Highest to Lowest:", descendingPrices);

// Display the original list
console.log("Original Prices:", prices);

// Display a reversed version
let reversedPrices = prices.slice().reverse();
console.log("Reversed Prices:", reversedPrices);

// Generate a random ordering
let randomPrices = prices.slice().sort(() => Math.random() - 0.5);
console.log("Random Ordering:", randomPrices);