7. Remove Duplicates :-

Write a function removeDuplicates(arr) that returns a new array with duplicates removed.
Order should be preserved.
Example: removeDuplicates([1, 2, 2, 3, 1, 4]) → [1, 2, 3, 4]
Hint: Use a results array. For each item, only push it if it isn’t already in results .
Edges: all duplicates, no duplicates, single item

---

INPUT :-

• Get the text input from the user as coma seperated Number Eg. 10,20,30,40,50,10,20,30

PROCESS :-

• create a funciton whihch take array as parameter and remove the duplicates from the array and return new array
• create a function to get input, validates and call the function which removes duplicate the array

OUTPUT :-

• [1,1,2,2,3,3,4,4] - duplicate removed array 1,2,3,4

EDGE :-

all duplicates, no duplicates, single item

---

PSEUDOCODE :-

<!-- function to remove duplicate elements from array -->

removeDuplicate = (arr) => {

    <!-- create a array to store unique elements -->
    result = []

    <!-- loop the input array -->
    FOR EACH element in arr {

        <!-- assume current element does not exist in result -->
        hasElm = false

        <!-- loop the result array -->
        FOR LOOP (i, i < result.length, i++) {

            <!-- current element of result array -->
            resElm = result[i]

            <!-- if current element already exists -->
            IF (resElm === arrElm) {

                <!-- mark element as existing -->
                hasElm = true

                <!-- no need to check further -->
                BREAK

            }

        }

        <!-- add element if not already present -->
        IF (hasElm === false) {

            result.push(arrElm)

        }

    }

    <!-- return unique elements array -->
    return result

}

<!-- function to get input, validate and remove duplicates -->

getRemovedDuplicates = () => {

    <!-- get input value -->
    input = inputElement.value

    <!-- empty validation -->
    IF (input === "") {

        print - "Please enter some numbers separated by commas."
        return

    }

    <!-- split input and trim spaces -->
    numberArray = input -> split -> trim

    <!-- validate only numbers separated by commas -->
    FOR LOOP (i, i < numberArray.length, i++) {

        value = numberArray[i]

        IF (value === "" OR isNaN(value)) {

            print - "Please enter only numbers separated by commas. Eg. 1,2,3,3"
            return

        }

    }

    <!-- show error if only one element -->
    IF (numberArray.length === 1) {

        print - "Please enter more than one number."
        return

    }

    <!-- call removeDuplicate -->
    resultArr = removeDuplicate(numberArray)

    <!-- if all elements are same -->
    IF (resultArr.length === 1) {

        print - "All elements are same."
        return

    }

    <!-- if no duplicates exist -->
    IF (resultArr.length === numberArray.length) {

        print - "No duplicates in this array."
        return

    }

    <!-- display duplicate removed array -->
    print - resultArr

}
