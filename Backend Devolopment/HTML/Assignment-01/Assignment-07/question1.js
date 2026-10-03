let students = ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza', 'Sara', 'Bilal'];

// Check whether Ayesha is present
console.log("Is Ayesha present?", students.includes('Ayesha'));

// Find the first occurrence of Sara
console.log("First Sara position:", students.indexOf('Sara'));

// Find the last occurrence of Sara
console.log("Last Sara position:", students.lastIndexOf('Sara'));

// Find the first student whose name starts with A
let firstAStudent = students.find(name => name.startsWith('A'));
console.log("First student starting with A:", firstAStudent);

// Find the position of the first student whose name starts with A
let firstAIndex = students.findIndex(name => name.startsWith('A'));
console.log("Position of first A student:", firstAIndex);

// Find the last student whose name starts with A
let lastAStudent = students.findLast(name => name.startsWith('A'));
console.log("Last student starting with A:", lastAStudent);

// Find the position of the last student whose name starts with A
let lastAIndex = students.findLastIndex(name => name.startsWith('A'));
console.log("Position of last A student:", lastAIndex);