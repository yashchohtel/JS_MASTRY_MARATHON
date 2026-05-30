2. Print Prime Numbers Up to N :-

Ask the user for a number N. Print all prime numbers from 2 to N. (A prime is divisible only by 1 and
itself.)

EDGES
• N less than 2 (no primes to print)
• N = 2 (only one prime: 2 itself)
• N is large (1000)

HINT
This is a NESTED loop. Outer loop walks 2 to N. For each number, an inner loop checks if anything
from 2 to that-number-minus-1 divides it cleanly. If nothing does — it's prime.

-------------------------

INPUT :-

• 

PROCESS :-

• 

OUTPUT :-

• 

EDGE :-
• 

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
   




