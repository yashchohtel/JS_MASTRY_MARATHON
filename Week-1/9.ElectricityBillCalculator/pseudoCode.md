9) The Electricity Bill Calculator :-

Ask for units consumed in a month. Calculate bill using slab system:
→ First 100 units → ₹3 per unit
→ Next 100 units (101–200) → ₹5 per unit
→ Next 100 units (201–300) → ₹7 per unit
→ Above 300 units → ₹10 per unit

Output: total bill + breakdown of each slab.

EXAMPLE · 250 units → (100 × 3) + (100 × 5) + (50 × 7) = ₹1,150
EDGES 0 units, exactly 100/200/300, very large like 500

PLAIN-ENGLISH DECOMPOSITION  ↓↓↓↓↓↓

INPUTS:
• Get the unit or Electricity

PROCESS:
• Validate for being empty, zero and negative
• calculate the bill for first 100 unit as 3rs per unit
• Calculate the bill for second 100 unit as 5rs per unit
• Calculate the bill for third 100 unit as 7rs per unit
• Calculate the bill for units after 300 as 10rs stantard 

OUTPUT:
• The bill of Electricity as per unit slab

EDGES:
• 0 unit, 100/200/300, very lare units like 500

PSEUDOCODE ↓↓↓↓↓↓

get the unit of Electricity

IF (unitInput == "")
    print - please fill the field
ELSE IF (unit < 0)
    print - unit should be greater then zero 
ELSE IF (unit >= 300)
    print - 100*3 + 100*5 + 100*7 + (unit-300)*10 
    unit >= 500 ? "very high consumption" : "";
ELSE IF (unit >= 200)
    print - 100*3 + 100*5 + (unit-200)*7 
ELSE IF (unit >= 100)
    print -  100*3 + (unit-100)*5
ELSE IF (unit < 100)
    print - unit*3