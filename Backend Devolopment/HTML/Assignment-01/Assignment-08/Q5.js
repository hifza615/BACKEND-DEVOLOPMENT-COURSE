
let student1 = {
    name: "Hifza",
    class: 10,
    chemistry: 85,
    mathematics: 90,
    urdu: 88,
    english: 92,

    calculateResult: function () {
        let total = this.chemistry + this.mathematics + this.urdu + this.english;
        let percentage = (total / 400) * 100;

        return {
            total: total,
            percentage: percentage
        };
    }
};

// Property access
console.log("Student Name:", student1.name);
console.log("Class:", student1.class);

// Bracket notation
console.log("Chemistry Marks:", student1["chemistry"]);

// Call the method
let result1 = student1.calculateResult();

console.log(student1.name + "'s Total:", result1.total);
console.log(student1.name + "'s Percentage:", result1.percentage + "%");

// Second student with the same type of method
let student2 = {
    name: "Sara",
    class: 10,
    chemistry: 78,
    mathematics: 82,
    urdu: 90,
    english: 80,

    calculateResult: function () {
        let total = this.chemistry + this.mathematics + this.urdu + this.english;
        let percentage = (total / 400) * 100;

        return {
            total: total,
            percentage: percentage
        };
    }
};

let result2 = student2.calculateResult();

console.log(student2.name + "'s Total:", result2.total);
console.log(student2.name + "'s Percentage:", result2.percentage + "%");

// Remove one property
delete student2.urdu;

console.log("Final Student Object:", student2);

