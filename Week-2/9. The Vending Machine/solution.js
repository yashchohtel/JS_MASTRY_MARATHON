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

    // select result element to show errors
    let error = document.getElementById("error");

    // array to store all selected items
    let selectedItems = {};

    // get all selected items
    let selectedCheckboxes = document.querySelectorAll('input[name="item"]:checked');

    // validation for item selection (at least one item must be selected)
    if (selectedCheckboxes.length === 0) {
        errorMessages.push('Please select at least one item.');
        error.innerHTML = errorMessages.map(error => `• ${error}`).join("<br>");
        return;
    }

    // getting selected items value and quentity and storeing it in selectedItems object, item name as key and item quentity as value.
    selectedCheckboxes.forEach(item => {

        let itemName = item.value;
        let itemQuentity = Number(item.closest('.item').querySelector('input[type="number"]').value);

        // validation for item which is out of stock
        if (itemStock[itemName] == 0) {
            errorMessages.push(`${itemName} is out of stock (pleae unselect it).`);
        }

        // validation for item which is not out of stock
        else if (isNaN(itemQuentity) || itemQuentity <= 0 || !Number.isInteger(itemQuentity)) {
            errorMessages.push(`Please enter a quentity for ${itemName}. It must be a positive integer.`);
        }

        // valid item
        else {
            selectedItems[itemName] = itemQuentity;
        }

    });

    // stock validation check started
    for (let item in selectedItems) {

        // check quentity
        if (selectedItems[item] > itemStock[item]) {

            // push error
            errorMessages.push(
                itemStock[item] === 0 ?
                    `No stock available for ${item}.`
                    :
                    `Sorry, only ${itemStock[item]} ${item} are available, please enter quentity equal or lessthen stock.`
            );

        }

    }

    // get the money input value and convert it to a number
    let moneyInput = document.getElementById('moneyInput');
    let money = Number(moneyInput.value);

    // money input validation for being empty zero and negative
    if (moneyInput === "" || money <= 0) {

        // push error
        errorMessages.push(`Please enter the money - must be greater than zero`);

    } else {

        // calculate total, change and error if not enough money
        let total = 0;
        let change = 0;

        // select element to show result 
        let result = document.getElementsByClassName("result");

        console.log(result)

        for (let item in selectedItems) {
            total += itemPrices[item] * selectedItems[item]
        }

        // total cost validaiton
        if (money < total) {

            // push error
            errorMessages.push(`money is not enough your total is ₹${total}, need ₹${total - money} more`);

        } else {

            // calculate change
            change = money - total;

            console.log(total)
            console.log(change)
            console.log(errorMessages)
            console.log(errorMessages.length)
            console.log(errorMessages.length === 0)

            // print result if no error
            if (errorMessages.length === 0) {

                result.innerHTML = `Your total is ₹${total}. Your change is ₹${change}. Thank you for your purchase!`;
                return;
            }

        }

    }

    // print error or quentity input field empty validation
    error.innerHTML = errorMessages.map(error => `• ${error}`).join("<br>");

}
















