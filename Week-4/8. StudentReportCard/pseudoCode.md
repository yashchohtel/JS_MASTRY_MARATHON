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

<!-- arrays to store student names and marks -->
students = []
studentMarks = []

<!-- function to calculate grade -->
calculateGrade = (marks) => {

    <!-- return grade based on marks -->
    IF (marks === 100) {
        return "A++"
    }

    ELSE IF (marks >= 90) {
        return "A"
    }

    ELSE IF (marks >= 75) {
        return "B"
    }

    ELSE IF (marks >= 60) {
        return "C"
    }

    ELSE {
        return "F"
    }

}

<!-- function to add student -->
addStudent = () => {

    <!-- get name and marks from input fields -->
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

    <!-- validate marks -->
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

<!-- function to create report data -->
generateReport = (names, marks) => {

    <!-- array to store report data -->
    result = []

    <!-- loop both arrays and create object -->
    MAP names array {

        create object with:

        name
        marks
        grade

    }

    <!-- return report data -->
    return result

}

<!-- function to generate class statistics -->
generateStats = (studentData) => {

    <!-- variable to store total marks -->
    total = 0

    <!-- loop all students and add marks -->
    FOR EACH student {

        total += student.marks

    }

    <!-- calculate average -->
    average = total / total students

    <!-- assume first student has highest and lowest marks -->
    studentWithMaxMark = first student
    studentWithLowMark = first student

    <!-- loop all students -->
    FOR EACH student {

        <!-- update highest scorer -->
        IF (student.marks > studentWithMaxMark.marks) {

            studentWithMaxMark = student

        }

        <!-- update lowest scorer -->
        IF (student.marks < studentWithLowMark.marks) {

            studentWithLowMark = student

        }

    }

    <!-- return average, highest and lowest scorer details -->
    return stats

}

<!-- function to print class report -->
printClassReport = () => {

    <!-- call generateReport -->
    result = generateReport(students, studentMarks)

    <!-- get result elements -->
    cardResult = cardResultElement
    statsResult = statsResultElement

    <!-- validate student data exists -->
    IF (result.length === 0) {

        print - "Please add student details first"
        return

    }

    <!-- create table structure -->
    tableHTML = table header

    <!-- loop report data -->
    FOR LOOP (i) {

        <!-- add row containing -->
        S.No.
        Name
        Marks
        Grade

    }

    <!-- close table -->

    <!-- display table -->
    print table

    <!-- get statistics -->
    stats = generateStats(result)

    <!-- display statistics -->
    print stats

}
