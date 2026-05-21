9. The Vending Machine

Build the logic for a vending machine.
→ Items: Chips 20, Soda 35, Chocolate 50, Water 15 ₹ ₹ ₹ ₹
→ Stock: Chips (3), Soda (0), Chocolate (5), Water (2)
→ User enters: item name + amount of money

Your code must:
→ 1. Check if the item exists
→ 2. Check if it's in stock
→ 3. Check if money is enough
→ 4. If all good — dispense, calculate change, reduce stock
→ 5. If anything fails — return money with the right error message

EDGES item not in menu, item out of stock (Soda), insufficient money, exact change, 0 or ₹ negative inserted

---------------------------

INPUT :-

• get the income amount form number input and store it in variable name (incomeInput)

PROCESS :-

• Convert the income into number and store in the variable name numberInput 
• Validate for being empty zero and negative
• calculate the tax according to income slabs

OUTPUT :-

• total income, tax payable, take-home amount.

EDGE :- 

• boundary income ( 5,00,000), negative income, zero income

---------------------------

PSEUDOCODE :-

<!-- get data -->
get the income ammount from the number input field
convert the string to the number

<!-- slabs -->
slab1 - 0%
slab2 - 5%
slab3 - 20%
slab4 - 30%
slab3FixedTax = 12500
slab4FixedTax = 112500

validation
IF (incomeInput === "")
    print - "please enter your income"
ELSE IF (income <= 0)
    print - "your income should be greater then zero"

Calculate the tax
ELSE IF (income <= 250000)
    print - "income - 2,50,000 total, take-home amount - 2,50,000, no tax for income below 2,50,000"

ELSE IF (income > 250000 && income <= 500000)
    <!-- 5% on amount above 2,50,000-->
    taxAbleIncome = income - 250000
    payableTax = (slab2 / 100) * taxAbleIncome;
    takeHomeAmount = income - payableTax
    print - "income, payableTax, takeHomeAmount"
    
ELSE IF (income > 500000 && income <= 1000000)
    taxAbleIncome = income - 500000
    payableTax = (slab3 / 100) * taxAbleIncome + slab3FixedTax 
    takeHomeAmount = income - payableTax
    print - "income, payableTax, takeHomeAmount"

ELSE IF (income > 1000000)
    taxAbleIncome = income - 1000000
    payableTax = (slab4 / 100) * taxAbleIncome + slab4FixedTax
    takeHomeAmount = income - payableTax
    print - "income, payableTax, takeHomeAmount"

