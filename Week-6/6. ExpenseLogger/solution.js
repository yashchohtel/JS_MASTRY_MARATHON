// a student object to store student data
let student = {};

// function to add student data to the object
addStudentData = () => {

    // an array store errors
    const errors = [];

    // select result element
    const result = document.getElementById("result")

    // selecting input field (name age city)
    const studentName = document.getElementById("studentName").value.trim();
    const studentCity = document.getElementById("studentCity").value.trim();
    const studentAge = Number(document.getElementById("studentAge").value);

    // radio
    const selectedCourse = document.querySelector('input[name="course"]:checked');

    // checkbox
    const isEnrolled = document.getElementById("isEnrolled").checked;

    // validation
    if (!studentName) {
        errors.push("Student name is required");
    }

    if (!studentCity) {
        errors.push("City is required");
    }

    if (!studentAge) {
        errors.push("Age is required");
    } else if (studentAge <= 0) {
        errors.push("Age must be greater than 0");
    }

    if (!selectedCourse) {
        errors.push("Please select a course");
    }

    // print all errors
    if (errors.length > 0) {
        result.innerHTML = errors.map(error => `<p>• ${error}</p>`).join("");
        return;
    }

    // insert the data into object 
    student = {
        name: studentName,
        city: studentCity,
        age: studentAge,
        course: selectedCourse.value,
        isEnrolled: isEnrolled ? "enrolled" : "not enrolled",
    };

    // print data
    let output = "";

    for (let key in student) {
        output += `<p>${key} - ${student[key]}</p>`;
    }

    result.innerHTML = output;

    result.innerHTML += `<p>---------------- <br> enter data and click update to update student data</p>`;

    // reset form
    document.getElementById("studentForm").reset();

}

// a function to update the object
updateStudentData = () => {

    // select result element
    const result = document.getElementById("result")

    // validate if data exist or not to update
    if (Object.keys(student).length === 0) {
        result.innerHTML = "No data found. Please add student data first.";
        return
    }

    // selecting input field (name age city)
    const studentName = document.getElementById("studentName").value.trim();
    const studentCity = document.getElementById("studentCity").value.trim();
    const studentAge = Number(document.getElementById("studentAge").value);

    // radio
    const selectedCourse = document.querySelector('input[name="course"]:checked');

    // checkbox
    const isEnrolled = document.getElementById("isEnrolled").checked;

    // update object
    studentName && (student.name = studentName);
    studentCity && (student.city = studentCity);
    studentAge && (student.age = studentAge);
    selectedCourse && (student.course = selectedCourse);
    isEnrolled && (student.isEnrolled = isEnrolled ? "enrolled" : "not enrolled");

    // add batchNumber property with value of 4 in object
    student.batchNumber = 4;

    // print data
    let output = "";

    for (let key in student) {
        output += `<p>${key} - ${student[key]}</p>`;
    }

    result.innerHTML = output;

    result.innerHTML += `<p>---------------- <br> Batch Number Added.</p>`;

    // reset form
    document.getElementById("studentForm").reset();

}