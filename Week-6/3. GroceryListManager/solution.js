// set groceries object
let groceries = {
    items: [],
    totalItems: 0,
    purchasedCount: 0
};

// function to add item
function addItem() {

    // get input values
    let itemName = document.getElementById("itemName").value.trim();
    let itemQuantity = Number(document.getElementById("itemQuantity").value);

    let listContainer = document.getElementById("listContainer");
    let emptyMessage = document.getElementById("emptyMessage");
    let showProgressBtn = document.getElementById("showProgressBtn");
    let result = document.getElementById("result");

    // validate empty inputs
    if (itemName === "" || itemQuantity === "") {
        result.innerHTML = "Please fill all fields.";
        return;
    }

    // validate quantity
    if (itemQuantity <= 0) {
        result.innerHTML = "Please enter a valid quantity.";
        return;
    }

    // create item object
    let item = {
        name: itemName,
        quantity: itemQuantity,
        purchased: false
    };

    // add item to array
    groceries.items.push(item);

    // increment total items
    groceries.totalItems++;

    // hide empty message
    emptyMessage.style.display = "none";

    // show progress button
    showProgressBtn.style.display = "block";

    // current item index
    let index = groceries.items.length - 1;

    // display item
    listContainer.innerHTML += `
        <div class="item">
            <span>${item.name} (${item.quantity})</span>
            <label>
                <input type="checkbox" onchange="markPurchased(${index})">
                Purchased
            </label>
        </div>
    `;

    // show feedback
    result.innerHTML = `${itemName} added successfully, add next item.`;

    // clear inputs
    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = "";

}

// function to mark item as purchased
function markPurchased(index) {

    // find the clicked item object
    let item = groceries.items[index];

    // toggle purchased status
    if (item.purchased === false) {

        item.purchased = true;
        groceries.purchasedCount++;

    } else {

        item.purchased = false;
        groceries.purchasedCount--;

    }

}

// function to show progress
function showProgress() {

    let result = document.getElementById("result");

    // validate empty list
    if (groceries.totalItems === 0) {
        result.innerHTML = "List is empty.";
        return;
    }

    // display progress
    result.innerHTML = `
        <p><strong>Total Items:</strong> ${groceries.totalItems}</p>
        <p><strong>Purchased:</strong> ${groceries.purchasedCount}</p>
        <p><strong>Remaining:</strong> ${groceries.totalItems - groceries.purchasedCount}</p>
    `;
    
}