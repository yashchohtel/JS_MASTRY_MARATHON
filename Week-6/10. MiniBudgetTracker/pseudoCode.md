10. Mini Budget Tracker :-

let budget = {
    transactions: [],
    balance: 0,
    totalIncome: 0,
    totalExpenses: 0
};

Build the complete budget tracker:
- addIncome(description, amount)
- addExpense(description, amount)
- showTransactions()
- showSummary()

Edges:
- Expense greater than balance
- Income of 0
- No transactions yet
- All income and no expenses

---

INPUT :-

•

PROCESS :-

•

OUTPUT :-

•

EDGE :-

•

---

PSEUDOCODE :-

<!-- function to add income -->
addIncome = () => {

    get description and amount

    validate empty inputs

    convert amount to number

    validate amount

    create transaction object

    add transaction

    update balance

    update total income

    update current balance

    show success message

    clear inputs

}

<!-- function to add expense -->
addExpense = () => {

    get description and amount

    validate empty inputs

    convert amount to number

    validate amount

    validate balance

    create transaction object

    add transaction

    update balance

    update total expense

    update current balance

    show success message

    clear inputs

}

<!-- function to show transactions -->
showTransactions = () => {

    validate no transactions

    create output

    loop transactions array

    display transactions

}