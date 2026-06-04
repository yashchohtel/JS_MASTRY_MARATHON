1. Square and Cube :-

Write two functions: square(n) and cube(n) . Each takes a number and returns the result.
Then write a third function printPowers(n) that calls both and prints:

Square of 4: 16
Cube of 4: 64

Edges: n = 0, n = negative, n = decimal

---

INPUT :-

• Get the number from the user

PROCESS :-

• validate the number for being empty.
• Handle the Condition for negative input
• and calculate the square and cube of the num

OUTPUT :-

• square of 2 is = ""
• square of 3 is = ""

EDGE :-

n = 0, n = negative, n = decimal

---

PSEUDOCODE :- 

<!-- create a function to get square of the number -->
function square(num) {
    return num ** 2; // it returns the square of the given number
}


<!-- create a function to get cube of the number -->
function cube(num) {
    return num ** 3; // it returns the cube of the given number
}

<!-- create a function for validation and calling cube and square and showing -->
function squareAndCube () {
 
    <!-- get the numInput and convert it in number -->
    numInput = input.value
    num = Number(numInput)

    <!-- validate numInput for being empty -->
    IF (numInput === "")
        print - "please fill the field"
        return
    
    <!-- zero validation -->
    ELSE IF (num === 0)
        print - "please enter non zero number"
        return

    <!-- call the cube and square function and store it in variable -->
    cubeResult = cube(num)
    squareResult = square(num)

    <!-- show result -->
    print - square and cube or num is cubeResult squareResult

}