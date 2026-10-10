
let employees = [
    { name: "Ali", department: "IT", salary: 80000 },
    { name: "Sara", department: "HR", salary: 70000 },
    { name: "Ahmed", department: "IT", salary: 95000 },
    { name: "Ayesha", department: "Finance", salary: 85000 }
];

let itEmployees = employees.filter(employee => employee.department === "IT");

let highSalaryEmployee = employees.find(employee => employee.salary > 90000);

let employeeNames = employees.map(employee => employee.name);

let totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);

console.log("IT Employees:", itEmployees);
console.log("First Employee With Salary Above 90000:", highSalaryEmployee);
console.log("Employee Names:", employeeNames);
console.log("Total Salary:", totalSalary);