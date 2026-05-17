4) The Pizza Order Validator :-

Build the order validator for a pizza app. Take size, toppings count, and delivery type.
→ Sizes: Small 199, Medium 299, Large 399 ₹ ₹ ₹
→ Toppings: ₹40 per topping (max 5 toppings)
→ Delivery: "pickup" (free) or "delivery" ( 40, free over 500) ₹ ₹
→ Output: base price, toppings cost, delivery fee, final total

EDGES invalid size, more than 5 toppings, negative toppings count, invalid delivery type

-------------------------

INPUT :-

• select the size of the pizza (useing radio buttion)
• select the topping of the pizza maxium 5 (using checkboxs)
• select the delivery type (using radio button)

PROCESS :-

• validate the size and delivery field for being empty (selecting topping is optional)
• Extract the value price of the pizza using (lookup object and select size value)
• Extract the topping from the select topping variable using loop
• get the type of the delivery 
• Calculate the total bill pizza size + numbers of topping + deleviry type


OUTPUT :-

• base price - 199/299/299
• topping - numbers of topping * 40
• delivery - free/40
• total  - *****

EDGE :-
• height = 0 (would crash division), negative inputs, decimal inputs

-------------------------

PSEUDOCODE :-

get the pizza size by select the checked pizza size radio button and store it in variable name (pizzaSize)
get the topping by selecting the checkbox and sotre it in variable name (pizzaToppings)
get the deleviry type by selection the deliviry type radio button and store it in variale name (deliveryType)

create a lookup object for pizzaSizePrice with price and value
get the pizza size using pizzaSizes lookup object and pizzaSize variable
get all the tooping name / pice / count by looping pizzaToppings variable
extract the value of of the deleviry type from deliveryType using .value()

empty validation
IF (pizzaSize === null || deliveryType === null){
    print - "please select pizza size and delivery type"
}

topping validation
ELSE IF (toppingsCount > 5){
    print - "you can select max 5 topping"
} 

total bill calculation
ELSE 
    IF (deliveryTypeValue === "homeDelivery")
        print - "total as per home delivery"
    else 
        print - "as per take pickup" 
