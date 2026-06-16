10. Expense Splitter :-

let trip = { name: "Goa Trip", members: [], expenses: [], totalSpent: 0 }

Write:
• addMember(name) — adds a person to the trip
• addExpense(paidBy, description, amount) — logs an expense, updates totalSpent
• showSummary() — prints total spent, each expense, and how much each person owes (totalSpent / number of members)

EDGES: No members added, one member, member not in the list pays an expense

---

INPUT :-

• trip name - set trip name
• member name - set members
• number name, item, amount - set expense detail

PROCESS :-

• addTrip(tripname) - add a trip name
• addMember(name) — adds a person to the trip
• addExpense(paidBy, description, amount) — logs an expense, updates totalSpent
• showSummary() — prints total spent, each expense, and how much each person owes (totalSpent / number of members)

OUTPUT :-

• expense summery

EDGE :-

• No members added, one member, member not in the list pays an expense

---

PSEUDOCODE :-

<!-- object to store trip details -->
trip = {
    name: ""
    members: []
    expenses: []
    totalSpent: 0
}

<!-- function to add trip name -->
addTripName = () => {

Select result element

IF (trip name already exists){

    display error

    return

}

Get trip name

IF (trip name is empty){

    display error

    return

}

Store trip name

Display success message

}

<!-- function to add member -->
addMember = () => {

Select result element

IF (trip name is empty){

    display error

    return

}

Get member name

IF (member name is empty){

    display error

    return

}

Add member to members array

Display success message

Clear input

Add member to dropdown

}

<!-- function to add expense -->
addExpense = () => {

Select result element

IF (trip name is empty){

    display error

    return

}

IF (members are less than 2){

    display error

    return

}

Get paid by

Get expense name

Get expense amount

IF (paid by is empty){

    display error

    return

}

IF (expense name is empty){

    display error

    return

}

IF (expense amount is empty){

    display error

    return

}

Convert amount into number

IF (amount is less than or equal to 0){

    display error

    return

}

Create expense object

Push expense object

Update total spent

Display success message

Clear inputs

}

<!-- function to show summary -->
showSummary = () => {

Select result element

Create error variable

IF (trip name is empty){

    add error

}

IF (members are less than 2){

    add error

}

IF (no expenses){

    add error

}

IF (errors exist){

    display all errors

    return

}

Calculate share per person

Create expense list

Loop through expenses

    Add expense details

Create settlement

Loop through members

    Calculate total paid by current member

    Loop through expenses

        IF (expense belongs to current member){

            Add expense amount

        }

    Calculate difference

    Display paid amount

    Display share amount

    IF (difference is greater than 0){

        Display gets back amount

    }

    ELSE IF (difference is less than 0){

        Display needs to pay amount

    }

    ELSE{

        Display settled

    }

Display summary

}
