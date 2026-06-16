9. Shooping Card :-

Shopping Cart — Full Build

This is the demo, extended. You’ve seen the pieces. Now build the whole thing fromscratch.

let cart = { items: [], total: 0, itemCount: 0, couponApplied: false }

Write ALL of these:
• addItem(name, price) — adds item, updates total and count
• removeItem(name) — finds and removes item by name, updates total and count
• applyCoupon(discountPercent) — only once, only if cart isn’t empty
• showCart() — clean receipt with all items and final total
• clearCart() — resets everything back to initial empty state

EDGES: Remove item that doesn’t exist, apply coupon twice, clear an empty cart, show cart when empty

---

INPUT :-

• item id to add item in cart and delete item in cart
• discount code to apply discount
•

PROCESS :-

• addItem(name, price) — adds item, updates total and count
• removeItem(name) — finds and removes item by name, updates total and count
• applyCoupon(discountPercent) — only once, only if cart isn’t empty
• showCart() — clean receipt with all items and final total
• clearCart() — resets everything back to initial empty state

OUTPUT :-

• cart data and receipt

EDGE :-

• Remove item that doesn’t exist, apply coupon twice, clear an empty cart, show cart when empty

---

PSEUDOCODE :-

<!-- create dummy product data -->

<!-- create function to display products -->

displayProduct = () => {

    <!-- select product list element -->

    <!-- clear previous products -->

    <!-- loop through all products -->

        <!-- create product card -->

        <!-- display product image -->

        <!-- display product id -->

        <!-- display product name -->

        <!-- display product brand -->

        <!-- display product price -->

        <!-- create add to cart button -->

        <!-- insert product card -->

}

<!-- call display product function -->


<!-- object to store cart details -->
cart = {

    items: []

    total: 0

    itemCount: 0

    couponApplied: false

}

<!-- function to update cart -->
updateCart = () => {

    select cart items element

    clear previous cart items

    loop through cart items

        display cart card

    update total items

    update total price

    IF (cart is empty){

        clear final price

    }

    ELSE IF (coupon is applied){

        calculate final price

        display final price

    }

    update cart icon count

}

<!-- function to add product to cart -->
addToCart = () => {

    check product already exists in cart

    IF (product already exists){

        display alert

        return

    }

    find selected product

    add product to cart

    update total

    increment item count

    update cart icon count

}

<!-- function to remove item -->
removeItem = () => {

    find product index

    IF (product not found){

        display alert

        return

    }

    decrease item count

    decrease total price

    remove product

    update cart icon count

    clear receipt

    update cart

}

<!-- function to apply coupon -->
applyDiscount = () => {

    IF (coupon already applied){

        display alert

        clear coupon input

        return

    }

    get coupon code

    IF (cart is empty){

        display alert

        clear coupon input

        return

    }

    IF (coupon code is empty){

        display alert

        return

    }

    IF (coupon code is invalid){

        display alert

        clear coupon input

        return

    }

    mark coupon as applied

    clear coupon input

    clear receipt

    update cart

}

<!-- function to show receipt -->
showReceipt = () => {

    IF (cart is empty){

        display alert

        return

    }

    create receipt items

    loop through cart items

        add product details to receipt

    set discount as 0

    set final price as total

    create receipt

    IF (coupon is applied){

        calculate discount

        calculate final price

        add discount details

    }

    add total items

    add final total

    display receipt

}

<!-- function to clear cart -->
clearCart = () => {

    IF (cart is empty){

        display alert

        return

    }

    reset cart to initial state

    clear receipt

    update cart

}
