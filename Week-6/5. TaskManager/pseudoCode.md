5. Task Manager :- 

let taskManager = {
    tasks: [],
    completedCount: 0,
    pendingCount: 0
};

Write:
- addTask(title, priority)
- completeTask(title)
- showByPriority(priority)
- showSummary()

Edges:
- Task not found
- Complete already-completed task
- showByPriority with no matches

---

INPUT :-

• task title, task priority - to set title
• priority - to shor task by priority

PROCESS :-

- addTask(title, priority)
- completeTask(title)
- showByPriority(priority)
- showSummary()

OUTPUT :-

• task summary
• task by priority

EDGE :-

- Task not found
- Complete already-completed task
- showByPriority with no matches

---

PSEUDOCODE :-

<!-- set object structure -->
taskManager = {

    tasks: []

    completedCount: 0

    pendingCount: 0

}

<!-- function to add task -->
addTask = () => {

    get task title and priority

    validate empty inputs

    create task object

    add task to tasks array

    increment pendingCount

    display task in list

    show success message

    clear inputs

}

<!-- function to mark task as completed -->
completeTask = (index) => {

    find clicked task

    if task is not completed

        mark task as completed

        increment completedCount

        decrement pendingCount

    else

        mark task as not completed

        decrement completedCount

        increment pendingCount

}

<!-- function to show tasks by priority -->
showByPriority = () => {

    get priority

    validate empty input

    validate no tasks

    create output variable

    loop tasks array

    if priority matches

        display task

    validate no matching tasks

}

<!-- function to show summary -->
showSummary = () => {

    validate no tasks

    display total tasks

    display completed tasks

    display pending tasks

}