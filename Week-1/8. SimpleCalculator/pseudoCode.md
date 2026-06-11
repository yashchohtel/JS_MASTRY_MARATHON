8) The Simple Calculator :-

Ask for two numbers and an operator (+, -, *, /). Perform the operation and print the result.
EDGES dividing by zero, invalid operator (like % or ^

PLAIN-ENGLISH DECOMPOSITION  ↓↓↓↓↓↓

INPUTS:
• Get the first and second number
• Get the operator

PROCESS:
• Validate both of number for bein empty
• calculate the ans by using both of number and an operator (+, -, *, /)

OUTPUT:
• print the final calculation

EDGES:
• dividing by zero

PSEUDOCODE ↓↓↓↓↓↓

get first number
get second number
select the operation (+, -, *, /)

IF (num1Input == "" || num2Input == "")
    print - "please fill all the fields"
ELSE IF operator == "/" AND num2 == 0
    print - "cannot divide by zero"
ELSE 
    print - num1 operator num2