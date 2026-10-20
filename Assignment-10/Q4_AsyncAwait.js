function getStudentData(id) {
    return new Promise(function (resolve, reject) {
        console.log("Loading Student " + id + "...");

        setTimeout(function () {
            if (id >= 1 && id <= 3) {
                let student = {
                    id: id,
                    name: ["Ali", "Sara", "Ahmed"][id - 1],
                    class: "10"
                };

                resolve(student);
            } else {
                reject(new Error("Student record not found!"));
            }
        }, 2000);
    });
}

async function loadStudents() {
    try {
        let student1 = await getStudentData(1);
        console.log("Student Data:", student1);

        let student2 = await getStudentData(2);
        console.log("Student Data:", student2);

        let student3 = await getStudentData(3);
        console.log("Student Data:", student3);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

loadStudents();

