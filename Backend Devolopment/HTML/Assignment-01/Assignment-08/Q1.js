
let orderAmounts = [1200, 450, 3000, 750, 1500, 250, 4200, 900];

let firstLargeOrder = orderAmounts.find(amount => amount > 2000);

let largeOrders = orderAmounts.filter(amount => amount > 1000);

let totalSales = orderAmounts.reduce((total, amount) => total + amount, 0);

console.log("Original Orders:", orderAmounts);
console.log("First Order Greater Than 2000:", firstLargeOrder);
console.log("Orders Greater Than 1000:", largeOrders);
console.log("Total Sales:", totalSales);

