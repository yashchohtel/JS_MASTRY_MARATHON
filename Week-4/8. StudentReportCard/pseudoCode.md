8. Student Report Card :-

You have two arrays:
names = ["Aman", "Priya", "Rohit"] and scores = [88, 45, 73] .

Write a function generateReport(names, scores) that:
• Prints each student’s name, score, and grade (use getGrade from Problem 5)
• Prints the class average
• Prints who scored highest

Edges: all failing, all same score, one studen

---

INPUT :-

[Grade Calculator]
• take the score input from number input field

[Class Report Generator]
• take the score input from number input field
• take the name of the student

PROCESS :-

[Grade Calculator]
• calculate the grade accordint to the score

[Class Report Generator]
• create a function to print class report which take 2 array names and scores array

OUTPUT :-

[Grade Calculator]
• 90 → ”A”

[Class Report Generator]
• yash | 100 | A++

EDGE :-

• all failing, all same score, one studen

---

PSEUDOCODE :-

<!-- function to Calculator Grade -->
calculateGrade = (marks) => {

    IF (marks === 100) {
        return "A++";
    }

    ELSE IF (marks >= 90) {
        return "A";
    }

    ELSE IF (marks >= 75) {
        return "B";
    }

    ELSE IF (marks >= 60) {
        return "C";
    }

    ELSE {
        return "F";
    }

}

<!-- create array to store student name and marks -->
students = [];
studentMarks = [];

<!-- function to add student data -->
addStudent = () => {

    <!-- get name and marks input values -->
    nameInput = nameInputElement.value
    marksInput = marksInputElement.value

    <!-- convert marks to number -->
    marks = Number(marksInput)

    <!-- get result element -->
    cardResult = cardResultElement

    <!-- validate empty fields -->
    IF (nameInput is empty OR marksInput is empty) {

        print - "Please enter both name and marks"
        return

    }

    <!-- validate marks range -->
    IF (marks is not a number OR marks < 0 OR marks > 100) {

        print - "Please enter a valid number between 0 and 100"
        return

    }

    <!-- store student name -->
    students.push(nameInput)

    <!-- store student marks -->
    studentMarks.push(marks)

    <!-- clear input fields -->
    clear name input
    clear marks input

    <!-- show success message -->
    print - "Enter next student details or click Generate Report"

}

<!-- function to generate class report -->
generateReposrt = (names, marks) = {

    <!-- create a result array to store object -->
    result = []

    <!-- loop the names array to create object of student data -->
    result = name.map(item, index){

        return{
            anme: item,
            marks: marks[index]
            <!-- call calculateGrade to get grade -->
            grade: calculateGrade(marks[index])
        }

    }

    <!-- return result -->
    return result

}

<!-- function to print class report -->
printClassReport = () => {

    <!-- call generateReport funciotn and pass name and marks array -->
    result = generateReport(students, studentMarks);

    <!-- if no data eror and return -->
    IF (result.length === 0){
        print - "insert data"
        return
    }

    create a table of the data

    print on diaplay

}
