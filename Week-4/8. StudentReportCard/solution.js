// function to add Student data into the array
let students = [];
let studentMarks = [];

// calculate grade based on marks
calculateGrade = (marks) => {

    // 90+ → ”A” | 75–89 → ”B” | 60–74 → ”C” | Below 60 → ”Fail” 

    if (marks === 100) {
        return "A++";
    }

    else if (marks >= 90) {
        return "A";
    }

    else if (marks >= 75) {
        return "B";
    }

    else if (marks >= 60) {
        return "C";
    }

    else {
        return "F";
    }

}

// function to add student data 
addStudent = () => {

    // get name and marks from input fields
    const nameInput = document.getElementById("name").value;
    const marksInput = document.getElementById("cardMarks").value;

    // convert marks to number
    const marks = Number(marksInput);

    // get card result element
    const cardResult = document.querySelector(".cardResult");

    // validate name and marks
    if (nameInput.trim() === "" || marksInput.trim() === "") {
        cardResult.innerHTML = "Please enter both name and marks";
        return;
    }

    // check if marks is a valid number and within the range of 0 to 100
    else if (isNaN(marks) || marks < 0 || marks > 100) {
        cardResult.innerHTML = "Please enter a valid number between 0 and 100";
        return;
    }

    // add student data to arrays
    students.push(nameInput);
    studentMarks.push(marks);

    // clear input fields
    document.getElementById("name").value = "";
    document.getElementById("cardMarks").value = "";

    // display success message
    cardResult.innerHTML = 'enter next student details or click "Generate Report" to see the class report';

}

// function to generate class report
generateReport = (names, marks) => {

    // array to store student report card data as object
    let result = [];

    // loop the array to create report object or name, marks and grade
    result = names.map((item, index) => {

        return {
            name: item,
            marks: marks[index],
            grade: calculateGrade(marks[index])
        };

    })

    // return result to show on display
    return result;

}

// function to generte stats
generateStats = (studentData) => {

    // variable to store the total marks of class
    let total = 0;

    // loop to add all class marks
    for (const student of studentData) {
        total += student.marks
    }

    // calculate the averate
    let average = (total / studentData.length)

    // --------------------------------

    // variables to store a student With max and lowest mark data
    let studentWithMaxMark = studentData[0]
    let studentWithLowMark = studentData[0]

    for (const student of studentData) {

        // set the student with highest mark
        if (student.marks > studentWithMaxMark.marks) {
            studentWithMaxMark = student;
        }

        // set student with lowest mark
        if (student.marks < studentWithLowMark.marks) {
            studentWithLowMark = student;
        }

    }

    // return the stats
    return `
    Class Average: ${average.toFixed(2)} <br>
    ------------------- <br>
    Highest Scorer: ${studentWithMaxMark.name} (${studentWithMaxMark.marks}) <br>
    ------------------- <br>
    Lowest Scorer: ${studentWithLowMark.name} (${studentWithLowMark.marks})`;

}

// event listener for generate report button
printClassReport = () => {

    // call generateReport funciton and store data into the result with it returns 
    let result = generateReport(students, studentMarks);

    // get card result element
    const cardResult = document.querySelector(".cardResult");
    const statsResult = document.querySelector(".stats");

    // if no element in result
    if (result.length === 0) {
        cardResult.innerHTML = 'please add students details first';
        return
    }

    let tableHTML = `
        <table class="reportTable">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Marks</th>
                    <th>Grade</th>
                </tr>
            </thead>
        <tbody>`;

    for (let i = 0; i < result.length; i++) {
        tableHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${result[i].name}</td>
            <td>${result[i].marks}</td>
            <td>${result[i].grade}</td>
        </tr>
    `;
    }

    tableHTML += `
    </tbody>
    </table>`;

    // show table
    cardResult.innerHTML = tableHTML;

    // get stats
    let stats = generateStats(result);

    // print stats
    statsResult.innerHTML = stats;

};




