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
•

PROCESS :-

• validate both of the fields for being empty.
• Validate both of the fields for being zero and negative.
• Calculate the BMI BY THIS FORMULA - BMI = weight ÷ (height × height)

OUTPUT :-

• Below 18.5 → "Underweight"
• 18.5 – 24.9 → "Normal"
• 25 – 29.9 → "Overweight"
• 30 and above → "Obese"

EDGE :-
• height = 0 (would crash division), negative inputs, decimal inputs

-------------------------

PSEUDOCODE :-

get the weight in kg and store it in variable name (weight)
get the height in cm, convert it in meter using (value/100) and store it in variable name (height) 

validate bothe the field for empty
IF (weight == "" || height == "")
    print - "please fill all the fields"
ElSE IF (weight <= 0 || height <= 0)
    print - "height and weight should bhe greater then zero"
ELSE
    calculate BMI = weight / (heightInMeter * heightInMeter)
    IF (bmi < 18.5)
        print - "Underweight"
    ELSE IF (bmi >= 18.5 && bmi <= 24.9)
        print - "Normal"
    ELSE IF (bmi >= 25 && <= 29.9 )
        print - "Overweight"
    ELSE IF (bmi >= 30)
        print - "Obese"