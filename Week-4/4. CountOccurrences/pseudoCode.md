4. Count Occurrences :-

Write a function countOccurrences(arr, target) that counts how many times target appears in arr .
Example: countOccurrences(["a", "b", "a", "c", "a"], "a") → 3
Edges: target not in array (return 0), empty array, numbers vs strings

---

INPUT :-

• Get the Word and Character Input from the user

PROCESS :-

• validate the number for being empty.
• Handle the Condition for negative input
• Print table of the given number in multiplication

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
