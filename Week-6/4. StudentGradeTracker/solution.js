// object structure
let gradeBook = {
    students: [],
    classAverage: 0
};

// function to add student
function addStudent() {

    // get input values
    let studentName = document.getElementById("studentName").value.trim();
    let studentScoreInput = document.getElementById("studentScore").value;
    let studentScore = Number(studentScoreInput);
    let result = document.getElementById("result");

    // validate empty inputs
    if (studentName === "" || studentScoreInput === "") {
        result.innerHTML = "Please fill all fields.";
        return;
    }

    // validate score
    if (studentScore < 0 || studentScore > 100) {
        result.innerHTML = "Score must be between 0 and 100.";
        return;
    }

    // create student object
    let student = {
        name: studentName,
        score: studentScore
    };

    // add student to array
    gradeBook.students.push(student);

    // show feedback
    result.innerHTML = "Student added successfully.";

    // clear inputs
    document.getElementById("studentName").value = "";
    document.getElementById("studentScore").value = "";
}

// function to update class average
function updateClassAverage() {

    let result = document.getElementById("result");

    // validate no students
    if (gradeBook.students.length === 0) {
        result.innerHTML = "No students found.";
        return;
    }

    // store total score
    let totalScore = 0;

    // calculate total score
    for (let student of gradeBook.students) {
        totalScore += student.score;
    }

    // update class average
    gradeBook.classAverage = totalScore / gradeBook.students.length;

    // display average
    result.innerHTML = `<p><strong>Class Average:</strong> ${gradeBook.classAverage.toFixed(2)}</p>`;
}

// function to show top student
function showTopStudent() {

    let result = document.getElementById("result");

    // validate no students
    if (gradeBook.students.length === 0) {
        result.innerHTML = "No students found.";
        return;
    }

    // store first student as highest
    let highest = gradeBook.students[0];

    // add first student as first topper
    let toppers = [highest];

    // find all top students
    for (let i = 1; i < gradeBook.students.length; i++) {

        let student = gradeBook.students[i];

        // new highest score found
        if (student.score > highest.score) {

            highest = student;

            // remove old toppers and add new highest
            toppers = [student];

        }

        // another student with same highest score
        else if (student.score === highest.score) {

            toppers.push(student);

        }

    }

    // store output
    let output = "";

    // loop top students
    for (let topper of toppers) {

        output += `
        <p>
            <strong>Name:</strong> ${topper.name}<br>
            <strong>Score:</strong> ${topper.score}
        </p>
        <hr>
    `;

    }

    // display top students
    result.innerHTML = output;

}

// function to show grade book
function showGradeBook() {

    let result = document.getElementById("result");

    // validate no students
    if (gradeBook.students.length === 0) {
        result.innerHTML = "No students found.";
        return;
    }

    // store output
    let output = "";

    // loop students
    for (let student of gradeBook.students) {

        output += `
            <p>
                <strong>Name:</strong> ${student.name}<br>
                <strong>Score:</strong> ${student.score}
            </p>
            <hr>
        `;

    }

    // display grade book
    result.innerHTML = output;

}