5.  Grade Classifier :-

Write a function getGrade(score) that returns a grade: 90+ → ”A” | 75–89 → ”B” | 60–74 → ”C” | Below 60 → ”Fail” 

Then write printClassReport(names, scores) that takes two arrays and prints each student’s name + grade.

Edges: score exactly 90, exactly 60, score above 100, negative score

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
•  90 → ”A” 

[Class Report Generator]
• yash | 100.

EDGE :-

• score exactly 90, exactly 60, score above 100, negative score

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