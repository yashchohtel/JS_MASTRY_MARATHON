1. Sum of Numbers from 1 to N :-

Ask the user for a number N. Calculate the sum of all numbers from 1 to N.
Example: N = 5 → 1 + 2 + 3 + 4 + 5 = 15

EDGES
• N = 0 (sum is 0)
• Negative N
• Very large N (e.g., 1,000,000 — should still work fast)

HINT - This is the textbook Accumulator pattern. let total = 0 goes outside the loop. Inside, total = total +
i. Trust the pattern.

---

INPUT :-

• Get the number input from the user

PROCESS :-

• validate the number for being empty 
• loop the number to accumulate the sum 

OUTPUT :-

• sum of the number

EDGE :-
• N = 0 (sum is 0)
• Negative N
• Very large N (e.g., 1,000,000 — should still work fast)

---

PSEUDOCODE :- LOOP patter is (Accumulator)

Get the number from the user (using input type number) store it in variable name (num) and convert it in number using Number() method
create the accumulator to store the sum

<!-- Validate the input for being empty -->
IF (num === "")
print - "please fill the field"

<!-- CALCULATE THE SUM -->
ELSE 
    accumulate the sum by loopin the given number 