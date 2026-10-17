
const bookRecord = ["BK-104", "JavaScript for Beginners", "Programming", 1200];

// Array Destructuring
const [bookId, bookTitle, , bookPrice] = bookRecord;

console.log(`Book ID: ${bookId}, Title: ${bookTitle}, Price: Rs. ${bookPrice}`);

// Shorter record with a default category
const shortRecord = ["BK-105", "Learning ES6"];

const [newBookId, newBookTitle, category = "General"] = shortRecord;

console.log(`Book ID: ${newBookId}, Title: ${newBookTitle}, Category: ${category}`);

// Original arrays remain unchanged
console.log("Original Record:", bookRecord);
console.log("Short Record:", shortRecord);
