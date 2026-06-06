2. Array Sum :-

Write a function sumArray(numbers) that takes an array of numbers and returns their total.

Example: sumArray([10, 20, 30]) → 60

Edges: empty array (return 0), array with one item, negative numbers

---

INPUT :-

• Get the text input from the user as coma seperated Number Eg. 10,20,30,40,50

PROCESS :-

• create a funciton whihch take array as parameter to calculate the sum of the array
• create a function to get input, validates and call the function which sums the array 

OUTPUT :-

• The sum of the 10,20,30,40,50, is: 150

EDGE :-

• empty array (return 0), array with one item, negative numbers

---

PSEUDOCODE :- 

<!-- funcion which calcualte the sum -->
calculateSum = (array) => {

    <!-- empty variable to store sum -->
    sum = 0;

    <!-- loop the array to get the sum -->
    LOOP (item of array) {
        sum += item
    }

    <!-- return the sum -->
    return sum;

}


<!-- funciton to get the input value and validaiton and get sum -->
getSum = () {

    <!-- get the input value -->
    input = inputElement.value

    <!-- empty validaiton check -->
    IF (input === "")
        print - "Please enter some numbers separated by commas."

    <!-- a array to store the splited and trimed value -->
    let numberArray = input -> split -> trim

    <!-- loop the numberArray to validate only number seprated buy (,) input -->
    FOR LOOP (i, i < array.length, i++){

        IF (isNaN(Array(i))){
            print - "Please enter some numbers separated by commas."
            return;
        }

    }

    <!-- call the calculateSum and pass array and store the resun in variable -->
    sum = calculateSum(array)

    <!-- display result -->
    print - sum;

}