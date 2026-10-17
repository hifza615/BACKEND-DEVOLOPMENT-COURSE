
const student = {
    name: "HIFZA",
    age: 19,
    department: "Software Engineering",
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};


const {
    name,
    age,
    department: program,
    address: { city, country },
    phone = "Not provided"
} = student;

console.log(`Student: ${name}`);
console.log(`Age: ${age}`);
console.log(`Program: ${program}`);
console.log(`City: ${city}`);
console.log(`Country: ${country}`);
console.log(`Phone: ${phone}`);

console.log(`Profile Summary: ${name} is enrolled in ${program}, lives in ${city}, and phone: ${phone}.`);
