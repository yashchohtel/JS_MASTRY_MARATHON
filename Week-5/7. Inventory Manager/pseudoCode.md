7. omvemtpru Management :-

let inventory = { items: [], totalValue: 0 }

Write:
• addItem(name, price, quantity) — adds item object, updates totalValue
• showInventory() — prints each item: name, price, quantity, item total (price × quantity)
• findItem(name) — returns the item object if found, or null if not

EDGES: Item not found, quantity = 0, same item added twice (treat as separate entries)

---

INPUT :-

• name, price, quantity - to add inventory
• item name to sert in inventory

PROCESS :-

• addItem(name, price, quantity) — adds item object, updates totalValue
• showInventory() — prints each item: name, price, quantity, item total (price × quantity)
• findItem(name) — returns the item object if found, or null if not

OUTPUT :-

• inventory added message
• all inventory
• specific item

EDGE :-

• Item not found, quantity = 0, same item added twice (treat as separate entries)

---

PSEUDOCODE :-

<!-- object to store inventory details -->

inventory = {
    items: []
    totalValue: 0
}

<!-- function to add item -->

addItem = () => {

    select result element
    get item name
    get item price
    get item quantity

    <!-- validate item name -->
    IF (item name is empty){
        <!-- display error -->
        return

    }

    <!-- validate item price -->
    IF (item price is less than or equal to 0){
        <!-- display error -->
        return
    }

    <!-- validate item quantity -->
    IF (item quantity is less than or equal to 0){
        <!-- display error -->
        return
    }

    create item object
    calculate stock total
    add item into inventory
    update inventory total value
    display success message
    clear inputs

}

<!-- function to show inventory -->

showInventory = () => {

    <!-- select result element -->
    <!-- check inventory -->

    IF (inventory is empty){
        <!-- display no inventory message -->
        return
    }

    create empty cards variable
    loop through inventory items
    create card for each item
    display total items
    display total inventory value
    display all cards

}

<!-- function to find item -->

findItem = () => {

    select result element

    get search item

    <!-- validate search item -->
    IF (search item is empty){
        <!-- display error -->
        return
    }

    create found item variable

    loop through inventory items

    <!-- compare item name -->

    IF (item found){
        <!-- store item -->
        <!-- stop loop -->
    }

    <!-- check item found -->
    IF (item not found){
        <!-- display item not found -->
        <!-- clear search input -->
        return
    }

    display found item

    clear search input

}
