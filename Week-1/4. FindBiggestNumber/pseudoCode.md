4) Ask the user for two numbers :-
→ Print which one is bigger. If both are equal, print "They are equal."
→ EDGES both same, negatives, decimals

PLAIN-ENGLISH DECOMPOSITION  ↓↓↓↓↓↓

INPUTS:
• Get first number
• Get second number

PROCESS:
• compare both number 
• if equal print both are equal
• else print which is bigger or smaller

OUTPUT:
• which number is bigger which is smaller, or equal

EDGES:
• both are same - print they are equal

PSEUDOCODE ↓↓↓↓↓↓

get both the number
Convert the input value into a number [num = Number(numInput)]

IF num1 === "" || num2 == ""
    print - "please fill the field"
ELSE IF isNaN(num1) || isNaN(num2)
    print - "please enter a valid number"
ELSE IF (num1 === num2)
    print - "both are equal"
ELSE IF (num1 > num2)
    print - "num 1 is bigger num2 is smaller"
ELSE IF (num1 < num2)
    print - "num1 is smaller and num2 is bigger"
