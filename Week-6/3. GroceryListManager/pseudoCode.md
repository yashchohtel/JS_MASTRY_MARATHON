3. Grocery list manager :-

let groceries = {
    items: [],
    totalItems: 0,
    purchasedCount: 0
};

Write:
- addItem(name, quantity)
- markPurchased(name)
- showList()
- showProgress()

Edges:
- Item doesn't exist
- Already purchased
- Empty list

---

INPUT :-

• item name and quentity - to add item 

PROCESS :-

- addItem(name, quantity)
- markPurchased(name)
- showList()
- showProgress()

OUTPUT :-

• item list summery 

EDGE :-

- Item doesn't exist
- Already purchased
- Empty list

---

PSEUDOCODE :-

<!-- function to add item -->
addItem = () => {

    get item name and quantity

    validate empty inputs

    validate quantity for zero and negative

    create item object

    add item to items array

    increment totalItems

    display item in list

    show success message

    clear inputs

}

<!-- function to mark item as purchased -->
markPurchased = (index) => {

    find clicked item from items array

    if item is not purchased

        mark item as purchased

        increment purchasedCount

    else

        mark item as not purchased

        decrement purchasedCount

}

<!-- function to show progress -->
showProgress = () => {

    validate empty list

    display total items

    display purchased items

    display remaining items

}