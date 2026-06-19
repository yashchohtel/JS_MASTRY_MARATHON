9. Full Habit Tracker :-

let habitTracker = {
habits: [],
totalHabits: 0,
todayCompleted: 0
};

Build the complete habit tracker:

- addHabit(name, targetPerWeek)
- markDone(name)
- resetDay()
- showHabits()
- showStats()

Edges:

- Mark habit not in list
- Mark already-completed habit
- Reset when nothing was done
- Show stats with 0 habits

---

INPUT :-

• name, targetPerWeek - to add habbit

PROCESS :-

- addHabit(name, targetPerWeek)
- markDone(name)
- resetDay()
- showHabits()
- showStats()

OUTPUT :-

• all habit data
• jabhit stats

EDGE :-

- Mark habit not in list
- Mark already-completed habit
- Reset when nothing was done
- Show stats with 0 habits

---

PSEUDOCODE :-

<!-- set object -->

habitTracker = {
habits: [],
totalHabits: 0,
todayCompleted: 0
};

<!-- functiont to add habbit -->

addHabbit = () => {

get title, genre and rating

    validate empty inputs

    convert target per week to number

    validate target for zero amd negative

    validate duplicate habit

    create habit object

    add habit to habits array

    hide empty message

    display habbits

    show success message

    clear inputs

}

<!-- mark as done -->
markDone = (index) => {

    find habit form index

    if already completed unmark and decreemtn todayCompleted

    if not already completed markcompleted and increment todayCompleted

}

<!-- functiont to show habbit -->
showHabits = () => {

    no habit validation

    create habit output 

    display output

}

<!-- function to show stats -->
showStats = () => {

    validate no habits

    display total habits

    display completed today

    display remaining habits

}

<!-- function to reset today -->
resetDay = () => {

    validate no habits

    loop habits array

    mark all habits as not completed

    update todayCompleted

    uncheck all checkboxes

    show success message

}