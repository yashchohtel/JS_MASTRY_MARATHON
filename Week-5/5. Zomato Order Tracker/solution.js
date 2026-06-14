// object to stora all order data
const orderTracker = {

    orders: [
        {
            id: "ORD-1781374513079",
            customer: "Yash",
            restaurant: "Domino's",
            items: ["Veg Pizza", "Coke"],
            totalBill: 248,
            status: "Pending"
        },
        {
            id: "ORD-1781374513080",
            customer: "Priya",
            restaurant: "Pizza Hut",
            items: ["Pasta", "French Fries"],
            totalBill: 278,
            status: "Preparing"
        },
        {
            id: "ORD-1781374513081",
            customer: "Rahul",
            restaurant: "KFC",
            items: ["Burger", "Coke"],
            totalBill: 198,
            status: "Out For Delivery"
        },
        {
            id: "ORD-1781374513082",
            customer: "Anjali",
            restaurant: "Domino's",
            items: ["Veg Pizza", "Pasta", "Coke"],
            totalBill: 427,
            status: "Delivered"
        },
        {
            id: "ORD-1781374513083",
            customer: "Rohit",
            restaurant: "Burger King",
            items: ["Burger", "French Fries"],
            totalBill: 248,
            status: "Pending"
        },
        {
            id: "ORD-1781374513084",
            customer: "Neha",
            restaurant: "McDonald's",
            items: ["Burger"],
            totalBill: 149,
            status: "Cancelled"
        },
        {
            id: "ORD-1781374513085",
            customer: "Amit",
            restaurant: "Pizza Hut",
            items: ["Veg Pizza"],
            totalBill: 199,
            status: "Preparing"
        },
        {
            id: "ORD-1781374513086",
            customer: "Sneha",
            restaurant: "KFC",
            items: ["Burger", "Pasta", "Coke"],
            totalBill: 377,
            status: "Delivered"
        }
    ]

};

// lookup object to get price of select item
const menu = {
    "Veg Pizza": 199,
    "Burger": 149,
    "French Fries": 99,
    "Coke": 49,
    "Pasta": 179
};

/* functions related to user ------------------- */

// function to place order
placeOrder = () => {

    // error object to store error
    let error = []

    // clear order card div
    document.querySelector(".orderCard").innerHTML = ""

    // get result eleemnt and clear on every funciton call
    let userResult = document.querySelector(".userResult");
    userResult.innerHTML = "";

    // get inputs value
    const userName = document.querySelector("#customerName").value;
    const restaurant = document.getElementById("restaurant").value;
    const selectedItems = document.querySelectorAll('input[name="item"]:checked');

    // empty name validation
    if (userName === "") {
        error.push("please enter your name")
    }

    //  empty resturent validation
    if (restaurant === "") {
        error.push("please select the resturant")
    }

    //  items resturent validation
    if (selectedItems.length === 0) {
        error.push("please select the items")
    }

    // show errors and clear error array
    if (error.length > 0) {
        userResult.innerHTML = error.map(err => `<p>• ${err}</p>`).join("");
        error = []
        return;
    }

    // create item list and clculate toal 
    const items = [];
    let total = 0;

    for (let item of selectedItems) {
        items.push(item.value);
        total += menu[item.value]
    }

    // create orderID
    const orderId = `ORD-${Date.now()}`;

    // create order object
    let order = {
        id: orderId,
        customer: userName,
        restaurant: restaurant,
        items: items,
        totalBill: total,
        status: "order placed"
    }

    // push object order detail into object tracker
    orderTracker.orders.push(order)

    // show order placed status
    userResult.innerHTML = `
    <h3>Order Placed Successfully!</h3>

    <p><strong>Order ID:</strong> ${order.id}</p>
    <p><strong>Customer:</strong> ${order.customer}</p>
    <p><strong>Restaurant:</strong> ${order.restaurant}</p>
    <p><strong>Items:</strong> ${order.items.join(", ")}</p>
    <p><strong>Total Bill:</strong> ₹${order.totalBill}</p>
    <p><strong>Status:</strong> ${order.status}</p>

    <p>Thank you for your order! 🎉</p>`;

    // clear user form 
    document.getElementById("userForm").reset();

}

// functin to show orders
function viewAllOrders() {

    // get order card elemtn to show all order and result elemt to show erros 
    const orderCard = document.querySelector(".orderCard");
    const userResult = document.querySelector(".userResult");

    // clear user resutl, orderCard element
    userResult.innerHTML = "";
    orderCard.innerHTML = "";

    // get the name of the order owner
    let orderOwner = document.querySelector("#customerOrderName").value;

    // empty validation 
    if (orderOwner === "") {
        userResult.innerHTML = "<p>• please enter you name to get orders related to you </p>";
        return
    }

    // get all orders related to the user
    let orders = orderTracker.orders.filter(order =>
        order.customer.toLowerCase() === orderOwner.toLowerCase()
    );

    // if no order found
    if (orders.length === 0) {
        userResult.innerHTML = "<p>• no orders found related to you </p>";
        document.getElementById("userForm").reset();
        return;
    }

    // show orders card
    let cards = "";

    orders.forEach(order => {
        cards += `
        <div class="card">
            <h3>${order.id}</h3>
            <p><strong>Restaurant:</strong> ${order.restaurant}</p>
            <p><strong>Items:</strong> ${order.items.join(", ")}</p>
            <p><strong>Total:</strong> ₹${order.totalBill}</p>
            <p><strong>Status:</strong> ${order.status}</p>
        </div>
    `;
    });

    document.querySelector(".orderCard").innerHTML = cards;

    // clear user form 
    document.getElementById("userForm").reset();
}

// a functin to check order status
checkOrderStatus = () => {

    // get order card elemtn to show all order and result elemt to show erros 
    const orderCard = document.querySelector(".orderCard");
    const userResult = document.querySelector(".userResult");

    // clear user resutl, orderCard element
    userResult.innerHTML = "";
    orderCard.innerHTML = "";

    // get the order id 
    const orderId = document.getElementById("orderIdStatus").value.trim();

    // Validation
    if (!orderId) {
        userResult.innerHTML = "<p>• Please enter an Order ID.</p>";
        return;
    }

    // Find order
    const order = orderTracker.orders.find(order => order.id === orderId);

    // Order not found
    if (!order) {
        userResult.innerHTML = `<p>• Order not found for ${orderId}.</p>`;
        document.getElementById("userForm").reset();
        return;
    }

    // Show order details
    userResult.innerHTML = `
        <h3>Order Status</h3>

        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Customer:</strong> ${order.customer}</p>
        <p><strong>Restaurant:</strong> ${order.restaurant}</p>
        <p><strong>Status:</strong> ${order.status}</p>
    `;

    // clear form
    document.getElementById("userForm").reset();

}

/* functions related to resturents ------------------- */

function viewRestaurantOrders() {

    // get owner result element
    const ownerResult = document.querySelector(".ownerResult");
    const restaurantOrderCard = document.querySelector(".ownerOrders");

    // clear previous result
    ownerResult.innerHTML = "";
    restaurantOrderCard.innerHTML = "";

    // get selected restaurant
    const restaurant = document.getElementById("ownerRestaurant").value;

    // validation
    if (restaurant === "") {
        ownerResult.innerHTML = "<p>• Please select a restaurant.</p>";
        return;
    }

    // get all orders related to restaurant
    const orders = orderTracker.orders.filter(order =>
        order.restaurant === restaurant
    );

    // no order found
    if (orders.length === 0) {
        ownerResult.innerHTML = `<p>• No orders found for ${restaurant}.</p>`;
        return;
    }

    // create cards
    let cards = "";

    orders.forEach(order => {
        cards += `
            <div class="card">
                <h3>${order.id}</h3>
                <p><strong>Customer:</strong> ${order.customer}</p>
                <p><strong>Resturent:</strong> ${order.restaurant}</p>
                <p><strong>Items:</strong> ${order.items.join(", ")}</p>
                <p><strong>Total:</strong> ₹${order.totalBill}</p>
                <p><strong>Status:</strong> ${order.status}</p>
            </div>
        `;
    });

    // show cards
    restaurantOrderCard.innerHTML = cards;
}

// function to update order status
function updateOrderStatus() {

    // get owner result and order cards
    const ownerResult = document.querySelector(".ownerResult");
    const ownerOrders = document.querySelector(".ownerOrders");

    // clear previous output
    ownerResult.innerHTML = "";
    ownerOrders.innerHTML = "";

    // get inputs
    const orderId = document.getElementById("orderId").value.trim();
    const status = document.getElementById("orderStatus").value;

    // validation
    if (orderId === "") {
        ownerResult.innerHTML = "<p>• Please enter an Order ID.</p>";
        return;
    }

    if (status === "") {
        ownerResult.innerHTML = "<p>• Please select a status.</p>";
        return;
    }

    // find order
    const order = orderTracker.orders.find(order => order.id === orderId);

    // order not found
    if (!order) {
        ownerResult.innerHTML = `<p>• No order found for ${orderId}.</p>`;
        return;
    }

    // update status
    order.status = status;

    // success message
    ownerResult.innerHTML = `
        <h3>Order Updated Successfully!</h3>

        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Customer:</strong> ${order.customer}</p>
        <p><strong>New Status:</strong> ${order.status}</p>
    `;

    // clear order id input
   document.getElementById("orderId").value = "";
   document.getElementById("orderStatus").value = "";

}