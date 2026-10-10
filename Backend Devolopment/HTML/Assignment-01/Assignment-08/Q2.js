
let marks = [45, 78, 92, 61, 88, 54, 73, 95];

let practiceMarks = marks.map(mark => mark + 5);

let passingMarks = marks.filter(mark => mark >= 70);

let firstAbove90 = marks.find(mark => mark > 90);

let totalMarks = marks.reduce((total, mark) => total + mark, 0);

console.log("Original Marks:", marks);
console.log("Practice Marks:", practiceMarks);
console.log("Marks 70 or Above:", passingMarks);
console.log("First Mark Above 90:", firstAbove90);
console.log("Total Marks:", totalMarks);

