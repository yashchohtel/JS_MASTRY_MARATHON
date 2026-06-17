4. Student Grade Tracker :-

let gradeBook = {
    students: [],
    classAverage: 0
};

Write:
- addStudent(name, score)
- updateClassAverage()
- showTopStudent()
- showGradeBook()

Edges:
- No students
- Two students with equal top score
- Score above 100

---

INPUT :-

• student name and score

PROCESS :-

- addStudent(name, score)
- updateClassAverage()
- showTopStudent()
- showGradeBook()

OUTPUT :-

• student score book, class average, top student

EDGE :-

Edges:
- No students
- Two students with equal top score
- Score above 100

---

PSEUDOCODE :-

<!-- function to add student -->
addStudent = () => {

    get student name and score

    validate empty inputs

    validate score

    create student object

    add student to students array

    show success message

    clear inputs

}

<!-- function to show top student -->
showTopStudent = () => {

    validate no students

    store first student as highest

    loop students array

    compare scores

    update highest student

    display top student

}

<!-- function to show grade book -->
showGradeBook = () => {

    validate no students

    create output variable

    loop students array

    display student details

}

<!-- function to show top student -->
showTopStudent = () => {

    validate no students

    store first student as highest

    add first student as first topper

    loop students array

    if new highest score found

        update highest student

        remove old toppers

        add new highest student

    else if score is equal to highest

        add student to toppers

    create output variable

    loop toppers array

    display top students

}