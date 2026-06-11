2) The Even / Odd Detector :- 

Ask for a number. Print "Even" or "Odd". If they enter 0, print "Zero is special."

PLAIN-ENGLISH DECOMPOSITION  ↓↓↓↓↓↓

INPUTS:
• Get the number

PROCESS:
• If the given number is zero print - "Zero is special." 
• Check the number is Even or Odd by using Modulo operator % which gives remainder.
• Print if its even or odd

OUTPUT:
• The given number is Even/Odd

EDGES:
• If number is 0 -> print "Zero is special." 

PSEUDOCODE ↓↓↓↓↓↓

get the number
Convert the input value into a number [num = Number(numInput)]

IF num === ""
    print - "please fill the field"

IF ELSE isNaN(num)
    print - "please enter a valid number"

IF num === 0
    print - "zero is special"

ELSE IF num % 2 === 0
    print - "the given number is even"

ELSE 
    print - "the given number is odd"