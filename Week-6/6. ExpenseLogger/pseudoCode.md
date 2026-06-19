6. Expense Logger :-

let expenseLog = {
    entries: [],
    totalSpent: 0,
    categoryBreakdown: {}
};

Write:
- addExpense(category, description, amount)
- showByCategory(category)
- showTotal()

Edges:
- Category with no entries
- Amount of 0
- Negative amount

---

INPUT :-

• expense title, amount, description - to set exepnse itme
• category - to show expense by category

PROCESS :-

- addExpense(category, description, amount)
- showByCategory(category)
- showTotal()

OUTPUT :-

• expense by category
• total expendature 

EDGE :-

- Category with no entries
- Amount of 0
- Negative amount

---

PSEUDOCODE :-

<!-- set object -->
expenseLog = {
    entries: [],
    totalSpent: 0,
    categoryBreakdown: {}
};

<!-- function to add expense -->
addExpense = () => {

    get category, description and amount

    validate empty inputs

    convert amount to number

    validate amount

    validate duplicate expense

    create expense object

    add expense to entries

    update totalSpent

    initialize category if not exists

    update categoryBreakdown

    hide empty message

    show table

    display expense

    show success message

    clear inputs

}

<!-- function to show expense by category -->
showByCategory = () => {

    get category

    validate no expenses

    validate empty category

    find category expenses

    validate category not found

    create output variable

    create total variable

    loop category expenses

    calculate total

    display expense details

    display total expense

}

<!-- function to show total expense -->
showTotal = () => {

    validate no expenses

    display total expense

}