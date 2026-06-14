5. Zomato Order Tracker :-

Model an order as a state object. An order has: restaurant , items (array), status , total .

Write:
• placeOrder(restaurant, items, total) — sets up the order, status = ”Placed”
• updateStatus(newStatus) — updates the status
• showOrder() — prints all order details cleanly

Valid statuses: ”Placed” → ”Confirmed” → ”Preparing” → ”Out for Delivery” → ”Delivered”

EDGES: Updating to an invalid status, showing order before placing it

-------------------------

INPUT :-

[user]
• name, restuent, items - place orde
• name - view all orders
• orderId - to show order status

PROCESS :-

[user]
• a function to place order
• a functoin to fiew all orders
• a function to show order status

[resturent]
• resturent name - to whor all order related to resturent
• order id - to update order status

OUTPUT :-

[user]
• place orders ount
• all orders
• order status

[resturent]
• all orders related to resturent
• order status updation feedback

EDGE :-

• Updating to an invalid status, showing order before placing it

-------------------------

PSEUDOCODE :-

<!-- object to store all order data -->
orderTracker = {
    <!-- store all orders -->
    orders: []
}

<!-- object to store menu items with price -->
menu = {
    <!-- store item name and price -->
}

----------

[user]

<!-- function to place order -->
placeOrder = () => {

    <!-- create error array -->

    <!-- clear order card -->

    <!-- select result element -->

    <!-- get customer name -->
    <!-- get restaurant -->
    <!-- get selected food items -->

    <!-- validate empty customer name -->
    IF (customer name is empty){

        <!-- add error -->

    }

    <!-- validate restaurant -->
    IF (restaurant is empty){

        <!-- add error -->

    }

    <!-- validate food items -->
    IF (no item selected){

        <!-- add error -->

    }

    <!-- check errors -->
    IF (error exists){

        <!-- display all errors -->
        return

    }

    <!-- create item list -->

    <!-- calculate total bill -->

    <!-- generate unique order id -->

    <!-- create order object -->

    <!-- push order into orderTracker -->

    <!-- display success message with order details -->

    <!-- clear form -->

}

<!-- function to view all customer orders -->
viewAllOrders = () => {

    <!-- select order card element -->
    <!-- select result element -->

    <!-- clear previous result -->

    <!-- get customer name -->

    <!-- validate empty name -->
    IF (customer name is empty){

        <!-- display error -->
        return

    }

    <!-- filter all orders related to customer -->

    <!-- check no order found -->
    IF (no order found){

        <!-- display message -->
        return

    }

    <!-- create cards -->

    <!-- loop all orders -->

        <!-- add order card -->

    <!-- display all cards -->

    <!-- clear form -->

}

<!-- function to check order status -->
checkOrderStatus = () => {

    <!-- select order card element -->
    <!-- select result element -->

    <!-- clear previous result -->

    <!-- get order id -->

    <!-- validate empty order id -->
    IF (order id is empty){

        <!-- display error -->
        return

    }

    <!-- find order -->

    <!-- check order not found -->
    IF (order not found){

        <!-- display message -->
        return

    }

    <!-- display order details -->

    <!-- clear form -->

}
   
----------

[resturent]

<!-- function to view restaurant orders -->
viewRestaurantOrders = () => {

    <!-- select result element -->

    <!-- get selected restaurant -->

    <!-- validate empty restaurant -->
    IF (restaurant is empty){

        <!-- display error -->
        return

    }

    <!-- filter all orders related to selected restaurant -->

    <!-- check no order found -->
    IF (no order found){

        <!-- display message -->
        return

    }

    <!-- create cards -->

    <!-- loop all restaurant orders -->

        <!-- add order card -->

    <!-- display all cards -->

}

<!-- function to update order status -->
updateOrderStatus = () => {

    <!-- select result element -->

    <!-- get order id -->

    <!-- get selected status -->

    <!-- validate empty order id -->
    IF (order id is empty){

        <!-- display error -->
        return

    }

    <!-- validate empty status -->
    IF (status is empty){

        <!-- display error -->
        return

    }

    <!-- find order by id -->

    <!-- check order not found -->
    IF (order not found){

        <!-- display message -->
        return

    }

    <!-- update order status -->

    <!-- display success message -->

    <!-- clear form -->

}