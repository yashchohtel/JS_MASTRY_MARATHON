// checkbox tick enable quentity input feater

// select all the items
let items = document.querySelectorAll('.item');

// loop all the items and attach the change event listner to enable/disable quentity input field on check box check/uncheck
items.forEach(item => {

    let checkbox = item.querySelector('input[type="checkbox"]');
    let quentityInput = item.querySelector('input[type="number"]');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            quentityInput.disabled = false;
        } else {
            quentityInput.disabled = true;
            quentityInput.value = ''; // Clear the input value when disabled
        }
    });

});

// lookup object for item prices
const itemPrices = {
    chips: 20,
    soda: 35,
    chocolate: 50,
    water: 15
};

// lookup object for item stock
const itemStock = {
    chips: 3,
    soda: 0,
    chocolate: 5,
    water: 2
};

// array to store error messages
let errorMessages = [];

// function to get items, calculate total and show errors
processPurchase = () => {

    // reset error messages 
    errorMessages = []

    // select result element to how result and errors
    let result = document.getElementById("result");

    // array to store all selected items
    let selectedItems = {};

    // get all selected items
    let selectedCheckboxes = document.querySelectorAll('input[name="item"]:checked');

    // get the money input value and convert it to a number
    let moneyInput = document.getElementById('moneyInput');
    let money = Number(moneyInput.value);

    // validation for item selection (at least one item must be selected)
    if (selectedCheckboxes.length === 0) {
        errorMessages.push('Please select at least one item.');
        result.innerHTML = errorMessages.map(error => `• ${error}`).join("<br>");
        return;
    }

    // getting select items value and quentity and storeing it in selectedItems object, item name as key and item quentity as value.
    selectedCheckboxes.forEach(item => {

        let itemName = item.value;
        let itemQuentity = Number(item.closest('.item').querySelector('input[type="number"]').value);

        // validation for quentity input (must be a positive integer)
        if (isNaN(itemQuentity) || itemQuentity <= 0 || !Number.isInteger(itemQuentity)) {
            errorMessages.push(`Please enter a quentity for ${itemName}. It must be a positive integer.`);
            result.innerHTML = errorMessages.map(error => `• ${error}`).join("<br>");
            return; // skip to the next item
        }

        // insert item and quentity into selectedItems object
        selectedItems[itemName] = itemQuentity;

    });

    // stock validation check started
    for (let item in selectedItems) {

        console.log(selectedItems[item]);
        
    }




}
