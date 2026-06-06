3. Find Maximum :-

Write a function findMax(numbers) that takes an array and returns the largest number. Don’t use Math.max() .
Example: findMax([3, 9, 1, 7, 5]) → 9
Edges: all same values, one item, all negatives

---

INPUT :-

• Get the text input from the user as coma seperated Number Eg. 10,20,30,40,50

PROCESS :-

• createa a funciton whihch take array as parameter to calculate the the largest number
• create a function to get input, validates and call the function which find the largest number

OUTPUT :-

• The largest among 10,20,30,40,50, is: 50

EDGE :-

Edges: all same values, one item, all negatives

---

PSEUDOCODE :-

<!-- a function that finds a maximum in the array -->
findMax = (array) => {

    <!-- create a variable to store the largest number and assign the first element of the array as value -->
    max = array[0]

    <!-- loop the array to compare the number to find the largest -->
    LOOP (item of array){

        IF (item > max){
            max = item
        }

    }

    <!-- return the max -->
    return max

}

<!-- a function that tell is all element in array are same or not -->
isSame = (arr) => {

    <!-- Assume all elements are equal -->
    equal = true;

    Start loop from second element {

        <!-- Get current element -->
        element = arr[i]

        <!-- Compare current element with first element -->

        IF(current element is not equal to first element){

            Mark as not equal

            Stop checking further elements

        }

    }

    <!-- return equal -->
    return equal

}

<!-- funciton to get the input value and validaiton and get sum -->
getMax = () => {

    <!-- get the input value -->
    input = inputElement.value

    <!-- empty validaiton check -->
    IF (input === "")
        print - "Please enter some numbers separated by commas."

    <!-- a array to store the splited and trimed value -->
    numberArray = input -> split -> trim

    <!-- loop the numberArray to validate only number seprated buy (,) input -->
    FOR LOOP (i, i < array.length, i++){

        IF (isNaN(Array(i))){
            print - "Please enter some numbers separated by commas."
            return;
        }

    }

    <!-- all number are similar validation - call isSame funciton and pass numberArray-->
    result = isSame(numberArray)

    <!-- show result if all item in array are same -->
    if(result) {
        print - "all numbers are same."
        return;
    }

    <!-- call findMax funciton and pass numberArray to get the max -->
    maxNum = findMax(numberArray);

    <!-- show result -->
    print maxNum

}
