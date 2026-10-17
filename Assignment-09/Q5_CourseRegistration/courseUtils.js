
function formatCourseSummary(course) {
    return `${course.courseName} is taught by ${course.instructor}. 
    Duration: ${course.duration}, Fee: Rs. ${course.fee}.`;
}

export { formatCourseSummary };
