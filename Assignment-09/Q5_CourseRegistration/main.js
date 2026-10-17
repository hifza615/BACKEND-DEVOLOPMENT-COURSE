
import courses from "./courses.js";
import { formatCourseSummary } from "./courseUtils.js";

// 1. Extract course name and fee
const { courseName, fee } = courses[0];

console.log("Selected Course:", courseName);
console.log("Course Fee: Rs.", fee);

// 2. Add a new course without changing original list
const newCourse = {
    courseName: "Canva for Everyone",
    instructor: "Hifza Emaan",
    duration: "2 months",
    fee: 1000
};

const updatedCourses = [...courses, newCourse];

// 3. Update one course fee without changing original object
const revisedCourse = {
    ...courses[0],
    fee: 1800
};

// 4. Display all course summaries
console.log("\nOriginal Course List:");

courses.forEach(function(course) {
    console.log(formatCourseSummary(course));
});

console.log("\nUpdated Course List:");

updatedCourses.forEach(function(course) {
    console.log(formatCourseSummary(course));
});

// 5. Display the revised course and compare original data
console.log("\nRevised Course:");
console.log(formatCourseSummary(revisedCourse));

console.log("\nOriginal First Course:");
console.log(courses[0]);

console.log("\nOriginal Number of Courses:", courses.length);
console.log("Updated Number of Courses:", updatedCourses.length);
