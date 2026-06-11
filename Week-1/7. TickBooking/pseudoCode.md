7) Ticket Booking :-

Ask for age + show time ("matinee" or "evening"). Pricing:

→ Under 12 or over 60 → ₹100 base
→ Everyone else → ₹250 base
→ Matinee → 20% off
→ Evening → full price

Output: base price, discount, final price.
EDGES age exactly 12, age exactly 60, invalid show time

PLAIN-ENGLISH DECOMPOSITION  ↓↓↓↓↓↓

INPUTS:
• Get the age in years
• Get the show time 

PROCESS:
• Validate age or show time empty field and age <= 0
• show the price ₹100 base for under 12 - over 60 ₹100 base and extra 20% off on matinee
• show the price ₹250 base for other then under 12 - over 60 or extra 20% off on matinee

OUTPUT:
• show base price, discount, final price

EDGES:
• if age is 0 print - age must be greater then zero
• if age is greater exact 12 or 60 -> ₹250 base

PSEUDOCODE ↓↓↓↓↓↓

get the age 
get the show time

IF(age <= 0 || !selectedShow)
    print - "fill or select all the field"
ELSE IF(age < 12 || age > 60)
    IF (showTime == "matinee")
        print - base price | 20% discount | final price 
    ELSE
        print - ₹100 base
ELSE IF(age >= 12 && age <= 60)
    IF (showTime == "matinee")
        print - base price | 20% discount | final price 
    ELSE
        print - ₹250 base