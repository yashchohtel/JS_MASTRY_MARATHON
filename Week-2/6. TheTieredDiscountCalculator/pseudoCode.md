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

get the input value convert it to number using numNumber(value) and store it to variable name cartValue

validation
IF (valueInput === "")
    print - "please fill the field"
ELSE IF (cartValue <= 0)
    print - "totol cart value should be greater then 0"

discount calculation
ELSE IF (cartValue < 500)
    print - "total - ****, no disccount on value bellow 500"
ELSE IF (carValue)
