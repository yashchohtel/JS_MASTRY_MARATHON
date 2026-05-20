8. The Income Tax Calculator

Calculate Indian income tax (simplified slabs):
→ Up to 2,50,000 → No tax ₹
→ ₹ 2,50,001 – 5,00,000 → 5% on amount above 2,50,000
→ ₹ 5,00,001 – 10,00,000 → 12,500 + 20% on amount above 5,00,000
→ Above 10,00,000 → 1,12,500 + 30% on amount above 10,00,000 ₹ 

Output: total income, tax payable, take-home amount.

EDGES boundary income ( 5,00,000), negative income, zero income

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
slab1 - 5%
slab2 - 20%
slab3 - 30%


validation
IF (incomeInput === "")
    print - "please enter your income"
ELSE IF (income <= 0)
    print - "your income should be greater then zero"

Calculate the tax
ELSE IF (income < 250000)
    print - "income - 2,50,000 total, take-home amount - 2,50,000, no tax for income bellow 2,50,000"
ELSE IF (income > 250000 && income <= 500000)
    <!-- 5% on amount above 2,50,000-->
    taxAbleIncome = income - 250000
    payableTax = (slab1 / 100) * taxAbleIncome;
    

