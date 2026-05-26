9. The Vending Machine :-

Build the logic for a vending machine.
→ Items: Chips 20, Soda 35, Chocolate 50, Water 15 ₹
→ Stock: Chips (3), Soda (0), Chocolate (5), Water (2)
→ User enters: item name + amount of money

Your code must:
→ 1. Check if the item exists
→ 2. Check if it's in stock
→ 3. Check if money is enough
→ 4. If all good — dispense, calculate change, reduce stock
→ 5. If anything fails — return money with the right error message

EDGES item not in menu, item out of stock (Soda), insufficient money, exact change, 0 or ₹ negative inserted

---

INPUT :-

• select the item from the checkbox like(chips, soda, chocolote, water)
• after selecting the checkbox, the number inut field will enable to enter item quentity in number which whould be greater then zero
• get the money input from the number input field to calculate - total, insuficient money, and changes

PROCESS :-

<!-- getting selected item and quentity and empty validation check for item and quentity -->

• first check the item checkbox, its enable number input field to enter quentity.
• get all the checked checkbox using querySelectorAll and store it in variable name selectedCheckboxes.
• loop the selectedCheckboxes to get item name and item quentity.
• validate the selectedCheckboxes for being empty and show eroor - ("please select at least 1 item").
• get selected item name and quentity and store it in selectedItems object, item name as key and item quentity as value.`
• before storeing item name and quentity to selectedItems validate the item for out of stock and push error in errorMessages array
• if there is avilable stock for the item then store the item name and quentity as key value pair in selectedItems object

<!-- enter corrent stock validation -->

• after having the select item and its desired quentity (desired quentity can be greated than the stock avilable), validate it for right quentity, quentity should be lessthen or equal to ailable stock
• loop the selectedItems object and check, is the desired quentity is greater then stock, if it is then push the eroor to enter the quentity accordint to stock

<!-- total calculation -->

• now we have select item and its right quentity - then get the money input and validate it for empty zero and negative
• if the money input is right then calculate the total
• now check is the money enough for the total cost
• if money is not enough push error to errorMessages array (money is not not enough your total is this)
• if meoney is enough equal or greater then total and there is no error in errorMessages array then show reuslt of total and change if any

<!-- stock reducing -->

• if every thing work fine, reduce the stock
• loop the selectedItems object to get the stock emelent of selected items
• reduce the sotck by subtracting the avilable stock with requested quentity

OUTPUT :-
• dispense, calculate change, reduce stock

EDGE :-
• item not in menu, item out of stock (Soda), insufficient money, exact change, 0 or ₹ negative inserted

---

PSEUDOCODE :-

<!-- checkbox tick enable quentity input feature -->

select all item which has class name (.item) and store it in variable name (items)

loop the item to attach change event listern
items.forEach(item => {

    let checkbox = item.querySelector('input[type="checkbox"]');
    let quentityInput = item.querySelector('input[type="number"]');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            quentityInput.disabled = false;
        } else {
            quentityInput.disabled = true;
            quentityInput.value = '';
        }
    });

});

<!-- lookup object for item prices -->

const itemPrices = {
chips: 20,
soda: 35,
chocolate: 50,
water: 15
};

<!-- lookup object for item stock -->

const itemStock = {
chips: 3,
soda: 0,
chocolate: 5,
water: 2
};

<!-- array to store error messages -->

let errorMessages = [];

<!-- function to get items, calculate total and show errors -->

processPurchase () {

    <!-- reset error message -->
    errorMessages = []

    <!-- select error div to show errors -->

    <!-- create a array to store all selected items -->
    selectedItems = {};

    <!-- select all the item using querySelectorAll on input which name is item and whihc is checked  -->
    selectedCheckboxes = document.querySelectorAll('input[name="item"]:checked');

    <!-- validation for item selection (at least one item must be selected) -->
    IF (selectedCheckboxes.length === 0) {
        errorMessages.push('Please select at least one item.');
        print - errorMessages
        return;
    }

    <!-- getting selected items value and quentity and storeing it in selectedItems object, item name as key and item quentity as value. -->

    selectedCheckboxes.forEach(item => {

        itemName = item.value;
        itemQuentity = Number(item.closest('.item').querySelector('input[type="number"]').value);

        <!-- validation for item which is out of stock -->
        IF (itemStock[itemName] == 0) {
            errorMessages.push(`${itemName} is out of stock (pleae unselect it).`);
        }

        <!-- validation for item which is not out of stock -->
        ELSE IF (isNaN(itemQuentity) || itemQuentity <= 0 || !Number.isInteger(itemQuentity)) {
            errorMessages.push(`Please enter a quentity for itemName. It must be a positive integer.`);
        }

        // valid item
        ELSE {
            selectedItems[itemName] = itemQuentity;
        }

    });

    <!-- stock validation check started -->
    for (let item in selectedItems) {

        <!-- check quentity -->
        if (selectedItems[item] > itemStock[item]) {

            <!-- push error -->
            errorMessages.push(
                itemStock[item] === 0 ?
                    `No stock available for item.`
                    :
                    `Sorry, only itemquentity are available item, please enter quentity equal or lessthen stock.`
            );

        }

    }

    <!-- get the money input value and convert it to a number -->
    moneyInput = document.getElementById('moneyInput').value;
    money = Number(moneyInput);

    <!-- money input validation for being empty zero and negative -->
    if (moneyInput === "" || money <= 0) {

        <!-- push error -->
        errorMessages.push(`Please enter the money - must be greater than zero`);

    } else {

        <!-- calculate total, change and error if not enough money -->
        total = 0;
        change = 0;

        <!-- select element to show result -->
        result = document.querySelector('.result');

        for (let item in selectedItems) {
            total += itemPrices[item] * selectedItems[item]
        }

        <!-- total cost validaiton -->
        IF (money < total) {

            <!-- push error -->
            errorMessages.push(`money is not enough your total is ₹${total}, need ₹${total - money} more`);

        } ELSE {

            // calculate change
            change = money - total;

            // print result if no error
            IF (errorMessages.length === 0) {
                result.innerHTML = `Your total is ₹${total}. Your change is ₹${change}. Thank you for your purchase!`;
            }

        }

    }

    <!-- show error -->
    IF (errorMessages.length > 0) {

        print - error message
        
    } ELSE {

        <!-- clear error if there is no error -->
        error.innerHTML = '';

        <!-- reducer stock if there every thing is fine -->
        for (let item in selectedItems) {

            <!-- select exact stock div -->
            stockElement = document.querySelector(`.${item}`);

            <!-- select stock count span inside that div -->
            let stockCount = stockElement.querySelector('.stockCount');

            <!-- insert reduced stock -->
            stockCount.innerHTML = `${itemStock[item] - selectedItems[item]}`

        }

    }

}
