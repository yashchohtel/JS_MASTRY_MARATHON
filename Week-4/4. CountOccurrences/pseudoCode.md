4. Count Occurrences :-

Write a function countOccurrences(arr, target) that counts how many times target appears in array .
Example: countOccurrences(["a", "b", "a", "c", "a"], "a") → 3
Edges: target not in array (return 0), empty array, numbers vs strings

---

INPUT :-

• Get the Word and Character Input from the user

PROCESS :-

• Create a function to validate only text input
• create a function to count occurence
• create a function to validate the input field and call onlyText validation functiona nd countOccurence function

OUTPUT :-

• p occurce 2 time in apple

EDGE :-

target not in array (return 0), empty array, numbers vs strings

---

PSEUDOCODE :- 

<!-- a function to validate to enter only text -->
onlyTextValidation = (arr) => {

    <!-- loop the array to is has a number of not -->
    FOR LOOP (i) {

        <!-- current element -->
        element = arr[i]

        <!-- return true if element is numer -->
        IF( element is number ){
            return true
        }

    }

    <!-- return false if no number -->
    return false;

}

<!-- function to find accurence of character in array -->
countOccurence = (arr, target) => {

    <!-- variable to store count -->
    count = 0;

    <!-- loop the array to find the count -->
    FOR LOOP (i) {

        <!-- current element -->
        element = arr[i]

        <!-- increment count if target is === to current element -->
        IF (element == target){
            count++
        }

    }

    <!-- return count -->
    return count;

}

<!-- function to validate input field and call onlyTextValidation, countOccurence funciton -->
getOccurence = () => {

    <!-- get the text input -->
    Word = element.value;
    character = element.vaue;

    <!-- validate it for being empty -->
    IF (word === "" || character === ""){
        print - "please fill both of the field"
        return
    } 

    <!-- a array to store the splited and trimed value -->
    charArray = Word -> split -> trim

    <!-- call the onlyTextValidation to validate if it has num or not-->
    let hasNum = onlyTextValidation(charArray)

    <!-- show error to enter only character -->
    IF (hasNum) {
        print - "Please enter only English alphabets."
        return
    }

    <!-- validate if the target character is num or not -->
    IF (!isNaN(character)){
        print - "Please enter only English alphabets in the target field."
        return
    }

    <!-- call the countOccurence function to find the count of target in the array -->
    count = countOccurence(charArray, char);

    <!-- display the result -->
    print = `The character "${char}" occurs ${count} times in the word "${word}".`;

}