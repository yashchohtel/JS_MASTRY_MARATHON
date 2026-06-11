10. Find And Filter :-

Write two functions:
• findFirst(arr, target) — returns the index of the first match, or -1 if not found
• filterAbove(numbers, threshold) — returns a new array with only numbers above the threshold

Examples:
findFirst(["a","b","c","b"], "b") → 1
filterAbove([10, 25, 8, 40, 15], 20) → [25, 40]

Edges: target not found, empty array, all items above threshold, none above threshold

---

INPUT :-

[find first]
• alphabet character seprated by coaa
• target character

[filter above]
• number seprated by coma
• thrashold number

PROCESS :-

[find first]
• create a function to find the first accournce of the target eleemnt in the aray

[filter above]
• create a function to filter the eleemnt that is avobe the threshold

OUTPUT :-

• ["a","b","c","b"], "b" -> 1
• [10, 25, 8, 40, 15], 20 → [25, 40]

EDGE :-

target not found, empty array, all items above threshold, none above threshold

---

PSEUDOCODE :-

[find first]

<!-- function to find first occurrence of target -->

findFirst = (arr, target) => {

    <!-- loop the array -->
    FOR LOOP (i = 0; i < arr.length; i++) {

        <!-- current element -->
        element = arr[i]

        <!-- return index if target found -->
        IF (element === target) {

            return i

        }

    }

    <!-- return -1 if target not found -->
    return -1

}

<!-- function to get input and validate -->0

getFirstMatch = () => {

    <!-- get input values -->
    input = findArray.value
    target = target.value

    <!-- validate empty fields -->
    IF (input is empty OR target is empty) {

        print - "Please fill all fields"
        return

    }

    <!-- split and trim input -->
    array = input -> split by comma -> trim

    <!-- call findFirst function -->
    result = findFirst(array, target)

    <!-- display result -->
    print result

}

<!-- -------------------------------------------------- -->

<!-- function to return numbers above threshold -->

filterAbove = (numbers, threshold) => {

    <!-- array to store result -->
    result = []

    <!-- loop the array -->
    FOR EACH number in numbers {

        <!-- check if current number is above threshold -->
        IF (number > threshold) {

            <!-- add number to result -->
            result.push(number)

        }

    }

    <!-- return result array -->
    return result

}

<!-- function to get input and validate -->

getFilteredNumbers = () => {

    <!-- get input values -->
    input = numbers.value
    threshold = threshold.value

    <!-- validate empty fields -->
    IF (input is empty OR threshold is empty) {

        print - "Please fill all fields"
        return

    }

    <!-- split and trim input -->
    numberArray = input -> split by comma -> trim

    <!-- validate numbers only -->
    FOR EACH value in numberArray {

        IF (value is empty OR isNaN(value)) {

            print - "Please enter only numbers separated by commas"
            return

        }

    }

    <!-- If only one element -->
    IF (numbeArray length == 1){
        print - "enter more numbers"
    }

    <!-- convert array values to number -->
    numberArray = convert all values to Number

    <!-- call filterAbove function -->
    result = filterAbove(numberArray, Number(threshold))

    <!-- display result -->

    <!-- if no number is above threshold -->
    IF (filtered.length === 0) {
        print - "No number above threshold"
    }

    <!-- if all numbers are above threshold -->
    ELSE IF (filtered.length === numberArray.length) {
        print - "All numbers are above threshold"
    }

    <!-- otherwise display filtered numbers -->
    ELSE {
        print - filtered
    }

}
