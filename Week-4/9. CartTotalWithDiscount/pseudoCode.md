9. Cart Total with Discounts :-

Write these functions:
• calculateSubtotal(prices) — sum of all prices
• applyDiscount(subtotal, discountPercent) — returns discounted amount
• applyTax(amount, taxRate) — returns amount with tax
• printReceipt(items, prices, discountPercent, taxRate) — calls all the above and

prints a clean receipt Example output:

--- RECEIPT ---
Shoes: Rs.2000
T-Shirt: Rs.800
Subtotal: Rs.2800
Discount (10%): -Rs.280
After discount: Rs.2520
Tax (18%): +Rs.453.60
Total: Rs.2973.60

Edges: 0% discount, 0% tax, empty cart

HINT: Draw the 4 functions and how they connect BEFORE you open the editor. Each
function takes the output of the previous one. That’s function chaining — and it’s how
every real app is built

---

INPUT :-

• item name as text
• item price as number

PROCESS :-

• create a funciton which validate input fields and calculate and print the total widh discount and tax
• create a funciton which calculate the total price which take price array
• create a function which calcualte the discount on subtotal
• create a function which calcualte the tax on discounted item.
• show result

OUTPUT :-

--- RECEIPT ---
Shoes: Rs.2000
T-Shirt: Rs.800
Subtotal: Rs.2800
Discount (10%): -Rs.280
After discount: Rs.2520
Tax (18%): +Rs.453.60
Total: Rs.2973.60

EDGE :-

• 0% discount, 0% tax, empty cart

---

PSEUDOCODE :-

<!-- create a function which calculate the sub total of time price -->
calculateSubtotal = (items) => {

    <!-- a variable which stores the sum of all items -->
    totalPrice = 0

    <!-- loop all items -->
    FOR EACH item in items {

        <!-- add current item price -->
        totalPrice += item.price

    }

    <!-- return total price -->
    return totalPrice

}

<!-- create a funciton which applay discount on subtotal-->
applyDiscount = (subtotal, discount) => {

    <!-- calculate final price after discount -->
    discountedPrice = subtotal - (subtotal * discount) / 100

    <!-- return discounted price -->
    return discountedPrice

}

<!-- create a funciton which applay tax on discounted item -->
applyTax = (amount, taxRate) => {

    <!-- add 18% of the amount, to the amount -->
    taxedTotal = amount + (amount * taxRate) / 100

    <!-- return price after tax -->
    return taxedTotal

}

<!-- ------------ -->

<!-- array to store items -->
items = []

<!-- function to add item -->
addItem = () => {

    <!-- get item name and price -->
    itemName = itemInput.value
    itemPrice = priceInput.value

    <!-- get result element -->
    result = resultElement

    <!-- validate empty fields -->
    IF (itemName is empty OR itemPrice is empty) {

        print - "Please enter item name and price"
        return

    }

    <!-- convert price to number -->
    price = Number(itemPrice)

    <!-- validate price -->
    IF (price is not a number OR price <= 0) {

        print - "Please enter a valid price"
        return

    }

    <!-- create item object -->
    item = {

        name: itemName,
        price: price

    }

    <!-- store item in array -->
    items.push(item)

    <!-- clear input fields -->
    clear item input
    clear price input

    <!-- show success message -->
    print - "Item added successfully. Add another item or click Print Receipt."

}

<!-- ------------ -->

<!-- create a function to get total discount tax and print reciept -->
printReceipt = () => {

    <!-- show error if no item and return -->
    IF (items length is zero){
        print - "please enter product details first"
        return
    }

    <!-- calculate total -->
    total = calculateSubtotal(items)

    // calculate discount
    discounted = applyDiscount(total, 10)

    // calculate tax on discounted price
    priceAfterTax = applyTax(discounted, 18)


}