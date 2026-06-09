6. Reverse an Array :-

Write a function reverseArray(arr) that returns a new reversed array. Don’t use .reverse() .
Example: reverseArray([1, 2, 3, 4, 5]) → [5, 4, 3, 2, 1]
Edges: empty array, single item, already reversed

---

INPUT :-

• Get the text input from the user as coma seperated Number Eg. 10,20,30,40,50

PROCESS :-

• create a funciton whihch take array as parameter and reverse the array
• create a function to get input, validates and call the function which reverse the array

OUTPUT :-

• reverse of this array is [10,20,30,40,50] - [50,40,30,20,10];

EDGE :-

• empty array, single item, already reversed

---

PSEUDOCODE :- 

<!-- function to reverse the array -->
reverseArray = (arr) => {

    <!-- create a array to stor reversed array element -->
    reversedArr = []

    <!-- loop from the last index of the array til first -->
    FOR LOOP (i = arr.length-1; i>=0; i--){
        
        <!-- push the current element to reversed array -->
        reversedArr.push(current element)

    }

    <!-- return reversedArr -->
    return reversedArr;

}

<!-- funciton to get the input value and validaiton and reverse the array -->
getReversed = () => {

    <!-- get the input value -->
    input = inputElement.value

    <!-- empty validaiton check -->
    IF (input === ""){
        print - "Please enter some numbers separated by commas."
    }

    <!-- a array to store the splited and trimed value -->
    let numberArray = input -> split -> trim

    <!-- show error is only one element -->
    IF (numberArray.length == 1){
        print - "Please enter more than one number."
        return;
    }

    <!-- loop the numberArray to validate only number seprated buy (,) input -->
    FOR LOOP (i, i < array.length, i++){

        IF (isNaN(Array(i))){
            print - "Please enter some numbers separated by commas."
            return;
        }

    }

    <!-- call the reverseArray and pass array and store the result in variable -->
    reverse = reverseArray(array)

    <!-- display result -->
    print - reverse;
}