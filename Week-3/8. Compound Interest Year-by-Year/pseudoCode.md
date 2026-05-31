8. Compound Interest Year-by-Year :-

A user invests ₹50,000 at 8% annual interest, compounded yearly. Show the balance at the end of each
year for 10 years.
Year 1: ₹54,000
Year 2: ₹58,320
...

EDGES
• Year 0 (initial balance, before any interest)
• Decimal precision — round to 2 decimals
• Interest rate of 0 (balance stays same)

HINT
Transform pattern over time. Start with balance = 50000. Each year: balance = balance +
balance × 0.08. So clean that most students overthink it.

-------------------------

INPUT :-

• Get the number input from the user

PROCESS :-

• validate the number for being empty.
• Handle the Condition for zero input
• Check the number is odd or even by using modulo (%) for positive or negative both

OUTPUT :-

• number is odd/even/zero

EDGE :-
• zero (handle separately), negative numbers, non-numeric input

-------------------------

PSEUDOCODE :-

Get the number from the user (using input type number) store it in variable name (num) and convert it in number using Number() method

Validate the input for being empty
IF (num === "")
    print - "please fill the field"

if value of num is zero
ELSE IF (num === 0) 
    print - "result.innerHTML = "❌ Please fill all fields";"

check if the number is odd or even
ELSE IF(num%2 === 0)
    print - "the number is even"
ELSE
    print - "the number is odd"
   




