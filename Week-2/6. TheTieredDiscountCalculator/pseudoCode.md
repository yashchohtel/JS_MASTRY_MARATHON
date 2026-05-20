6.  The Tiered Discount Calculator :-

Take cart total. Apply discount based on tier:

→ Below 500 → No discount ₹
→ ₹ 500 – 1,999 → 5% off
→ ₹ 2,000 – 4,999 → 10% off
→ ₹5,000 and above → 15% off

Output: original total, discount amount, final amount.

EDGES boundary values ( 500, 2000, 5000), negative total, zero

--------------------

INPUT :-

• Get the total vart value (number)

PROCESS :-

• Validate input for being empty and valid number, zero and negative
• Calculate discount accordint to teir
    → Below 500 → No discount ₹
    → ₹ ₹ 500 – 1,999 → 5% off
    → ₹ ₹ 2,000 – 4,999 → 10% off
    → ₹5,000 and above → 15% off

OUTPUT :-

• original total, discount amount, final amount.

EDGE :-
• boundary values ( 500, 2000, 5000), negative total, zero

--------------------

PSEUDOCODE :-

get the input value convert it to number using Number(value) and store it to variable name cartValue

validation
IF (cartValue === "")
    print - "please fill the field"
ELSE IF (cartValue <= 0)
    print - "total cart value should be greater then 0"

discount calculation
ELSE IF (cartValue < 500)
    discount = 0
    finalAmount = cartValue
    print - "original total, no discount, final amount"

ELSE IF (cartValue >= 500 && cartValue < 2000)
    discount = 5% of cartValue
    finalAmount = cartValue - discount
    print - "original total, discount amount, final amount"

ELSE IF (cartValue >= 2000 && cartValue < 5000)
    discount = 10% of cartValue
    finalAmount = cartValue - discount
    print - "original total, discount amount, final amount"

ELSE IF (cartValue >= 5000)
    discount = 15% of cartValue
    finalAmount = cartValue - discount
    print - "original total, discount amount, final amount"
