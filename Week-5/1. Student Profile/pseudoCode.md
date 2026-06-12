1. Student Profile :-

Create an object called student with these properties: name , age , city , course , isEnrolled .

Then write code that:
• Prints each property using dot notation
• Updates the city to ”Mumbai”
• Adds a new property batchNumber with value 4
• Prints the updated object

EDGES: What happens if you try to read a property that doesn’t exist?

---

INPUT :-

• name, age, city, course, isEnrolled

PROCESS :-

• create a function that validate the input and store the recived data into the object and print
• create a function which updates the object

OUTPUT :-

• original student data and updated student data.

EDGE :-

• What happens if you try to read a property that doesn’t exist?

---

PSEUDOCODE :-

<!-- a student object to store student data -->
const student  = {};

<!-- create a function which validate the input fields, store and print the data-->
addStudentData = () => {

    <!-- an array to store error -->
    errors = []

    <!-- select all input fields -->
    name
    city
    age
    course
    isEnrolled

    <!-- validate all field for being empty and number for being negative and zero -->

    <!-- validate student name -->
    IF (studentName is empty){
        <!-- add error -->
        errors.push("Student name is required")
    }

    <!-- validate city -->
    IF (studentCity is empty){
        <!-- add error -->
        errors.push("City is required")
    }

    <!-- validate age -->
    IF (studentAge is empty){
        <!-- add error -->
        errors.push("Age is required")
    }

    <!-- age should be greater than 0 -->
    ELSE IF (studentAge <= 0){
        <!-- add error -->
        errors.push("Age must be greater than 0")
    }

    <!-- validate course selection -->
    IF (course is not selected){
        <!-- add error -->
        errors.push("Please select a course")
    }

    <!-- print all errors -->

    <!-- if no error print student data -->
    print - studentData

    <!-- clear the form -->
    form.reset()

}

<!-- a function to update the student data -->
updateStudentData = () => {

    <!-- select all input fields -->
    name
    city
    age
    course
    isEnrolled

    <!-- update the value is provided and also add proerty batchNumber with value of 4 -->

    <!-- print the data on ui -->

    <!-- clear form -->

}