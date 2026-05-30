6. Find the Largest Number

User enters 5 numbers one by one. After all 5 are entered, print the largest one

EDGES
• All 5 numbers are the same (largest is still that value)
• All negative numbers (don't assume 0 is the floor)
• User enters a non-number (skip it or warn)

HINT
The Search-with-tracking pattern. Start with let largest = - Infinity (so even negative
numbers compete). Each loop, compare and update.

-------------------------

INPUT :-

• Get the number input from the user

PROCESS :- 

• get the input validate for being empty and convert it to number
• push the number into the array 
• when 5 number is collected calculate the largest number and display 

OUTPUT :-

• Ex. the largest number among 2, 3, 4, 5, 6 is 6

EDGE :-
• All 5 numbers are the same (largest is still that value)
• All negative numbers (don't assume 0 is the floor)
• User enters a non-number (skip it or warn)

-------------------------

PSEUDOCODE :- LOOP pattern is (Search)

<!-- set the array to store the entered number -->
numArray = []

<!-- get the input and convert it to nunber  -->
 print - "please enter your number" = inputElemnt.value
num = Number(numInput)

<!-- validate the input for being empty and show error -->
IF (numInput === ""){
    print - "please enter your number"
}

<!-- else push the number in array and calculat the largest number when 5 input are entered -->
ELSE {

    <!-- push element in array -->
    numArray.push(num)

    <!-- calculate the largest when array length is 5 -->
    IF (numArray.length === 5) {

        <!-- to store the largest number (store the first element or array to avoid 0 as base for negative) -->
        largest = numArray[0];

        <!-- loop the array to compare the largest to the element of aray  -->
        LOOP {

            <!-- if element is greater then largest store that element in largest -->
            IF(numArray[i] > largest){
                largest = numArray[i]
            }
        }

        print the result

    }

}