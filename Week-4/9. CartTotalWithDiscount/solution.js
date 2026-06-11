// functionto calcualte the total price
calculateSubtotal = (item) => {

    // a variable which stores the sum of all items
    let totalPrice = 0;

    // loop the priceArr to calculate the total price
    for (const item of items) {

        totalPrice += item.price;

    }

    // return total price
    return totalPrice;

}

// function to calculate the discount
applyDiscount = (subtotal, discount) => {
    return subtotal - (subtotal * discount) / 100;
}

// function to calculate the tax on discounted price
applyTax = (amount, taxRate) => {
    return amount + (amount * taxRate) / 100;
}

/* -------------------------------------- */

// function to add get item and store it into the array in the form of object

// array to store items
// let items = [];
const items = [
    {
        name: "jeans",
        price: 899
    },
    {
        name: "shirt",
        price: 799
    },
    {
        name: "tshirt",
        price: 449
    },
    {
        name: "shoe",
        price: 1899
    },
    {
        name: "watch",
        price: 4599
    },
    {
        name: "cap",
        price: 149
    }
];

// function to add item
addItem = () => {

    // get item name and price
    const itemName = document.getElementById("item").value;
    const itemPrice = document.getElementById("price").value;

    // get result element
    const result = document.getElementById("result");

    // validate empty fields
    if (itemName.trim() === "" || itemPrice.trim() === "") {
        result.innerHTML = "Please enter item name and price.";
        return;
    }

    // convert price to number
    const price = Number(itemPrice);

    // validate price
    if (isNaN(price) || price <= 0) {
        result.innerHTML = "Please enter a valid price.";
        return;
    }

    // create item object
    const item = {
        name: itemName,
        price: price
    };

    // store item in array
    items.push(item);

    // clear input fields
    document.getElementById("item").value = "";
    document.getElementById("price").value = "";

    // success message
    result.innerHTML = 'Item added successfully. Add another item or click "Print Receipt".';

};

// a function to get total discount tax and print reciept
printReceipt = () => {

    // get result element
    const result = document.getElementById("result");
    const receipt = document.querySelector(".receipt");

    // show error if no item and return
    if (items.length === 0) {
        result.innerHTML = "Please enter product details first";
        return;
    }

    // discount and tax rate
    let discountRate = 10;
    let taxRate = 18;

    // calculate total
    let total = calculateSubtotal(items);

    // calculate discount
    let discounted = applyDiscount(total, discountRate)

    // calculate tax on discounted price
    let priceAfterTax = applyTax(discounted, taxRate)

    let itemsList = "";

    for (const item of items) {
        itemsList += `<span>${item.name}</span>: ₹ ${item.price}<br>`;
    }

    // print reciept
    result.innerHTML = ""

    receipt.innerHTML = `
        ------------- RECEIPT -------------- <br>
        ${itemsList} 
        ------------------------------------ <br>
        <span>Subtotal</span>: ₹ ${total} 
        <span>Discount (${discountRate}%)</span>: ₹ ${(total * discountRate / 100).toFixed(2)} 
        <span>After Discount</span>: ₹ ${discounted.toFixed(2)} 
        <span>Tax (${taxRate}%)</span>: ₹ ${((discounted * taxRate) / 100).toFixed(2)} <br>
        ------------------------------------ <br>
        <span>Total</span>: ₹ ${priceAfterTax.toFixed(2)}
    `;

}