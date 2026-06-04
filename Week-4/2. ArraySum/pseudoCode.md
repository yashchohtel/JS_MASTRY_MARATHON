2. Array Sum :-

Write a function sumArray(numbers) that takes an array of numbers and returns their total.

Example: sumArray([10, 20, 30]) → 60

Edges: empty array (return 0), array with one item, negative numbers

---

INPUT :-

• Get the text input from the user as coma seperated Number Eg. 10,20,30,40,50

PROCESS :-

• conver te text of number seperated by comma into an array
• 

OUTPUT :-

• table of the number like (5 x 1 = 5)

EDGE :-

• User enters 0 (table of zeros — still print it)
• User enters a negative number
• User enters a decimal (e.g., 7.5)

---

PSEUDOCODE :- LOOP patter is (Transform)

Get the number from the user and store the number in variable name tableNum

validate the input field for being empty and negative
IF (tableNum === "")
print - please fill the field
ELSE IF (tableNum < 0)
print - please enter the positive number

now loop the number ten time to print the multiplicaion of the number from 1 to 10
using foor loop because we now the exact Repetition
