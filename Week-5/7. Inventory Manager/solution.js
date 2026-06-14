// Inventory Object
let inventory = {
    items: [],
    totalValue: 0
};

// function to add itme in inventory
function addItem() {

    // result element Clear Previous Error
    let result = document.querySelector("#result");
    result.innerHTML = "";

    // Get Inputs
    let itemName = document.getElementById("itemName").value.trim();
    let itemPrice = Number(document.getElementById("itemPrice").value);
    let itemQuantity = Number(document.getElementById("itemQuantity").value);

    // Validation
    if (itemName === "") {
        result.innerHTML = "Please enter item name.";
        return;
    }

    if (itemPrice <= 0) {
        result.innerHTML = "Please enter a valid item price.";
        return;
    }

    if (itemQuantity <= 0) {
        result.innerHTML = "Please enter a valid item quantity.";
        return;
    }

    // add item to the invertery
    let itemData = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity,
    }

    let stockTotal = itemPrice * itemQuantity

    inventory.items.push(itemData)
    inventory.totalValue += stockTotal

    // Success Message
    result.innerHTML = `
    <strong>Item Added Successfully!</strong><br>

    <strong>Name:</strong> ${itemName} <br>
    <strong>Price:</strong> ₹${itemPrice} <br>
    <strong>Quantity:</strong> ${itemQuantity} <br>
    <strong>Stock Total Value:</strong> ₹${itemPrice * itemQuantity}`;

    // clear input 
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemQuantity").value = "";

}

// function to show inventory
function showInventory() {

    // result element Clear Previous Error
    let result = document.querySelector("#result");
    result.innerHTML = "";

    // if no inventory
    if (inventory.items.length === 0) {
        result.innerHTML = "No Inventory Available.";
        return;
    }

    // create cards of inventoryy item
    let cards = "";

    for (let item of inventory.items) {

        cards += `
            <div class="inventoryCard">
                <p><strong>Name:</strong> ${item.name}</p>
                <p><strong>Price:</strong> ₹${item.price}</p>
                <p><strong>Quantity:</strong> ${item.quantity}</p>
                <p><strong>Item Total:</strong> ₹${item.price * item.quantity}</p>
            </div>
        `;

    }

    // show result
    result.innerHTML = `
        <h3>Total Items: ${inventory.items.length}</h3>
        <h3>Total Inventory Value: ₹${inventory.totalValue}</h3>

        <div class="inventoryCards">
            ${cards}
        </div>
    `;

}

// functin to find item in inventory
function findItem() {

    // result element Clear Previous Error
    let result = document.querySelector("#result");
    result.innerHTML = "";

    // Get Input
    let searchItem = document.getElementById("findItemInput").value.trim();

    // Validation
    if (searchItem === "") {
        result.innerHTML = "Please enter an item name.";
        return;
    }

    // Find Item
    let foundItem = null;

    for (let item of inventory.items) {

        if (item.name.toLowerCase() === searchItem.toLowerCase()) {
            foundItem = item;
            break;
        }

    }

    // Not Found
    if (foundItem === null) {
        result.innerHTML = "Item not found.";
        document.getElementById("findItemInput").value = ""
        return;
    }

    // Show Item
    result.innerHTML = `
        <div class="inventoryCards">
            <div class="inventoryCard">
                <p><strong>Name:</strong> ${foundItem.name}</p>
                <p><strong>Price:</strong> ₹${foundItem.price}</p>
                <p><strong>Quantity:</strong> ${foundItem.quantity}</p>
                <p><strong>Item Total:</strong> ₹${foundItem.price * foundItem.quantity}</p>
            </div>
        </div>
    `;

    // clear input
    document.getElementById("findItemInput").value = ""
    
}