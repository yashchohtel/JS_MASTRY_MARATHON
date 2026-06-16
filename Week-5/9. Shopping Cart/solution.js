// page transition 
const productsPage = document.getElementById("productsPage");
const cartPage = document.getElementById("cartPage");

document.getElementById("openCartBtn").onclick = () => {

    productsPage.style.display = "none";
    cartPage.style.display = "block";

    // update cart
    updateCart();

};

document.getElementById("backToProducts").onclick = () => {

    cartPage.style.display = "none";
    productsPage.style.display = "block";

};

/* ---------------------------------------- */

// product data to show on products page
let products = [
    {
        id: "SHRT101",
        name: "Casual Shirt",
        brand: "Allen Solly",
        price: 1499,
        image: "https://m.media-amazon.com/images/I/71E137by9DL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: "TSRT102",
        name: "Round Neck T-Shirt",
        brand: "Levi's",
        price: 799,
        image: "https://m.media-amazon.com/images/I/71XssP+XyBL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: "JEAN106",
        name: "Slim Fit Jeans",
        brand: "Wrangler",
        price: 1899,
        image: "https://m.media-amazon.com/images/I/41h9wHZD7lL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: "SHOE103",
        name: "Running Shoes",
        brand: "Sparx",
        price: 2499,
        image: "https://m.media-amazon.com/images/I/71V4GGv1edL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: "PERF111",
        name: "Premium Perfume",
        brand: "Bella Vita",
        price: 1299,
        image: "https://m.media-amazon.com/images/I/61BXRNekoEL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: "HAND112",
        name: "Cotton Handkerchief",
        brand: "Park Avenue",
        price: 299,
        image: "https://m.media-amazon.com/images/I/719Y7pGS6CL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: "WATCH104",
        name: "Analog Watch",
        brand: "Fastrack",
        price: 3299,
        image: "https://m.media-amazon.com/images/I/816eXKgDfIL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: "GLASS110",
        name: "Sunglasses",
        brand: "Fastrack",
        price: 1799,
        image: "https://m.media-amazon.com/images/I/51WfizfxCtL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: "CAP113",
        name: "Sports Cap",
        brand: "Nike",
        price: 699,
        image: "https://m.media-amazon.com/images/I/61oXH0-iKkL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: "BAG107",
        name: "Travel Backpack",
        brand: "Skybags",
        price: 2299,
        image: "https://m.media-amazon.com/images/I/71PIoNxXFKL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: "RING109",
        name: "Stylish Ring",
        brand: "Yellow Chimes",
        price: 899,
        image: "https://m.media-amazon.com/images/I/31NWt-Pa9uL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: "CHAIN108",
        name: "Silver Chain",
        brand: "Voylla",
        price: 1499,
        image: "https://m.media-amazon.com/images/I/611KbqaCPSL._AC_UL480_FMwebp_QL65_.jpg"
    }
];

// function to display product
displayProduct = () => {
    let productList = document.getElementById("productsList");

    productList.innerHTML = "";

    for (let product of products) {

        productList.innerHTML += `
        
        <div class="productCard">
        
            <img src="${product.image}" alt="${product.name}">

            <div class="productInfo">

                <p class="productId">${product.id}</p>
                <h3 class="productName">${product.name}</h3>
                <p class="productBrand">${product.brand}</p>

                <div class="productBottom">
                    <span class="productPrice">₹${product.price}</span>
                    <button
                        onclick="addToCart('${product.id}')"
                        class="addBtn"
                        id="${product.id}">
                        Add
                    </button>
                </div>

            </div>
        
        </div>`;

    }
}

displayProduct();

/* ---------------------------------------- */

// object to store itme added to the card
let cart = {
    items: [],
    total: 0,
    itemCount: 0,
    couponApplied: false
};

// function to display cart item
updateCart = () => {

    // select item
    let cartItems = document.getElementById("cartItems");

    // clear previous data
    cartItems.innerHTML = "";

    for (let product of cart.items) {

        cartItems.innerHTML += `

        <div class="cartCard">

            <div class="cartLeft">

                <img src="${product.image}" alt="${product.name}">

                <div class="cartInfo">

                    <h3>${product.name}</h3>

                    <p>₹${product.price}</p>

                </div>

            </div>

            <button
                class="deleteBtn"
                onclick="removeItem('${product.id}')"> 
                <i class="fa-solid fa-trash"></i>
            </button>

        </div>

        `;

    }

    // update total and item count on cart
    document.querySelector("#itemCount").innerHTML = cart.itemCount
    document.querySelector("#totalPrice").innerHTML = cart.total

    // applay discount
    if (cart.items.length == 0) {
        document.querySelector(".finalPrice").innerHTML = ""
    }
    else if (cart.couponApplied) {
        let finalPrice = cart.total - (cart.total * 20) / 100;
        document.querySelector(".finalPrice").innerHTML = `<strong>Final Price (20% Off) :</strong> ₹${finalPrice}`;
    }

    // show item count on cart icon
    document.querySelector("#cartCount").innerHTML = cart.itemCount;

}

// function to add itme to the card
addToCart = (productId) => {

    // check product already in cart
    let alreadyAdded = cart.items.find((item) => item.id === productId);

    if (alreadyAdded) {
        alert("Product is already in the cart.");
        return;
    }

    // find product
    let product = products.find((item) => item.id === productId);

    // insert that product into cart's items array
    cart.items.push(product);

    // calculat total
    cart.total += product.price;

    // increment items count
    cart.itemCount += 1

    // show item count on cart icon
    document.querySelector("#cartCount").innerHTML = cart.itemCount;

}

// function to delete item from cart
removeItem = (productId) => {

    // find item index
    let itemIndex = cart.items.findIndex((item) => item.id === productId);

    // check item found
    if (itemIndex === -1) {
        alert("Product not found.");
        return;
    }

    // decrease item count of cart
    cart.itemCount--;

    // decrease the total price of the cart
    cart.total = (cart.total - cart.items[itemIndex].price)

    // remove item
    cart.items.splice(itemIndex, 1);

    // show item count on cart icon
    document.querySelector("#cartCount").innerHTML = cart.itemCount;

    // clear receipt for new receipt
    document.getElementById("result").innerHTML = "";

    // update cart
    updateCart();

}

// function to applay discount
applayDiscount = () => {

    // if already coupoun applyed
    if (cart.couponApplied) {
        alert("coupon already applyed");
        document.querySelector("#couponInput").value = '';
        return
    }

    // get applay coupoun input
    const couponApplied = document.querySelector("#couponInput").value;

    // empty cart validation
    if (cart.items.length === 0) {
        alert("cart is empty add products to cart first");
        document.querySelector("#couponInput").value = '';
        return
    }

    if (couponApplied === "") {
        alert("please enter the coupon code");
        return
    }

    // right coupon validation
    if (couponApplied.toLowerCase() !== "happy") {
        alert("invalid or expired coupon code");
        document.querySelector("#couponInput").value = '';
        return
    }

    // mark couponApplied flag true
    cart.couponApplied = true;
    document.querySelector("#couponInput").value = '';

    // clear reciept for new receipt
    document.getElementById("result").innerHTML = "";

    // update card
    updateCart()

}

// function to show receipt
showReceipt = () => {

    // check cart
    if (cart.items.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    // create receipt items
    let receiptItems = "";

    for (let product of cart.items) {
        receiptItems += `<span>${product.name}</span>: ₹ ${product.price} <br>`;
    }

    // to calculate the final price after discount
    let discount = 0;
    let finalPrice = cart.total;

    // receipt
    let receipt = `
        <div class="receipt">

        ---------------- RECEIPT ----------------

        ${receiptItems}

        -----------------------------------------

        <span>Subtotal</span>: ₹ ${cart.total}
    `;

    // discount
    if (cart.couponApplied) {

        discount = (cart.total * 20) / 100;
        finalPrice = cart.total - discount;

        receipt += `
        <span>Discount (20%)</span>: ₹ ${discount}
        <span>After Discount</span>: ₹ ${finalPrice}
        `;

    }

    receipt += `
    -----------------------------------------

    <span>Total Items</span>: ${cart.itemCount}
    <span>Total</span>: ₹ ${cart.couponApplied ? finalPrice : cart.total}

    </div>`;

    document.getElementById("result").innerHTML = receipt;

}

// function to clear state
clearCart = () => {

    // if no item in cart
    if (cart.items.length === 0) {
        alert("cart is already clear!");
        return;
    }

    // cleart cart to initla state
    cart = {
        items: [],
        total: 0,
        itemCount: 0,
        couponApplied: false
    }

    // clear receipt 
    document.getElementById("result").innerHTML = "";

    // update cart
    updateCart();

}