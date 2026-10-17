
import getFullName, { getTotalMarks } from "./studentTools.js";

const fullName = getFullName("Hifza", "Emaan");
const totalMarks = getTotalMarks(85, 90, 88, 92);

console.log(`Student Name: ${fullName}`);
console.log(`Total Marks: ${totalMarks}`);
