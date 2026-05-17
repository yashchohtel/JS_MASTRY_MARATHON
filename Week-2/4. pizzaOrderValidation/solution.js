orderPizza = () => {

    // get input values and result div
    let pizzaSize = document.querySelector('input[name="pizzaSize"]:checked');
    let pizzaToppings = document.querySelectorAll('input[name="topping"]:checked');
    let deliveryType = document.querySelector('input[name="deliveryType"]:checked');
    let result = document.getElementById("result");

    // loopup object for pizza size price
    const pizzaSizePrice = {
        "small": 199,
        "medium": 299,
        "large": 399
    };

    // pizza size value
    let pizzaPrice = pizzaSize ? pizzaSizePrice[pizzaSize.value] : null;

    // toppings price/count/name
    let toppingsCount = 0;
    let toppingsPrice = 0;
    let toppingsName = [];

    pizzaToppings.forEach(topping => {
        toppingsCount++;
        toppingsPrice += 40;
        toppingsName.push(topping.value);
    })

    // delivery price and type
    let deliveryTypeValue = "";
    let deliveryPrice = 0;

    if (deliveryType) {
        deliveryTypeValue = deliveryType.value;
        if (deliveryTypeValue === "homeDelivery") {
            deliveryPrice = 40;
        }
    }

    // empty input validation
    if (pizzaSize === null || deliveryType === null) {
        result.innerHTML = "Please select pizza size and delivery type.";
    }

    // toppings count validation
    else if (toppingsCount > 5) {
        result.innerHTML = "You can select maximum 5 toppings.";
    }

    // calculate total price
    else {

        // total price
        let totalPrice = pizzaPrice + toppingsPrice;

        // if total price is above 500
        if (totalPrice >= 500) {
            deliveryPrice = 0;

            result.innerHTML = `
            ${pizzaSize.value}: ₹${pizzaPrice} <br>
            Toppings (₹ 40/toppings) : ₹${toppingsPrice} - ${toppingsName.join(", ")}  <br>
            Delivery type: ${deliveryTypeValue === "pickup" ? "Pickup" : "Home Delivery"} (free for value above 500)<br>
            ------------------- <br>
            Total price: ₹${totalPrice}.
            `

        }

        // if total price is below 500
        else {

            // if delivery type is home delivery 
            if (deliveryTypeValue === "homeDelivery") {

                totalPrice += deliveryPrice;

                result.innerHTML = `
                ${pizzaSize.value}: ₹${pizzaPrice} <br>
                Toppings (₹ 40/toppings) : ₹${toppingsPrice} - ${toppingsName.join(", ")}  <br>
                Delivery type: Home Delivery (₹${deliveryPrice})<br>
                ------------------- <br>
                Total price: ₹${totalPrice}.
                `

            }

            // if delivery type is pickup
            else {

                result.innerHTML = `
                ${pizzaSize.value}: ₹${pizzaPrice} <br>
                Toppings (₹ 40/toppings) : ₹${toppingsPrice} - ${toppingsName.join(", ")}  <br>
                Delivery type: Pickup (free)<br>
                ------------------- <br>
                Total price: ₹${totalPrice}.
                `

            }

        }

    }

}