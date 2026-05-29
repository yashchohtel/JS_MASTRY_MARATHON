countVovel = () => {

    // vowels
    const vowels = ["a", "e", "i", "o", "u"];
    const wordVowel = []; // to store the vowel in the world
    let vowelCount = 0;

    // get the world 
    const word = document.querySelector("#word").value.toLowerCase()

    // select result element to show result
    const result = document.querySelector("#result")

    // validate 
    if (word === "") {
        result.innerHTML = "please fill the field"
    }

    // count vowels
    else {

        // loop the word
        for (let i = 0; i < word.length; i++) {

            // get the single character
            const char = word[i];

            // find vowel
            let hasVowel = vowels.includes(char)

            if (hasVowel) {
                vowelCount++
                wordVowel.push(char)
            }

        }

        // display result
        result.innerHTML = `word ${word} has ${vowelCount} Vowel ${vowelCount > 0 ? `(${wordVowel.join(",")})` : ""} `;

    }

}