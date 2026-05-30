function reverseString() {

    // Get the number 
    let word = document.getElementById("word").value;
    let result = document.getElementById("result");

    // empty aray to store word character in reverse order
    let reverseWord = [];

    // empty input validation check
    if(word === ""){
        result.innerHTML = "❌ Please fill the field";
    } 

    // reverse the string
    else{

        for (let index = word.length - 1; index >= 0; index--) {
            
            reverseWord.push(word[index])

        }

        result.innerHTML = reverseWord.join("")

    }

    
}