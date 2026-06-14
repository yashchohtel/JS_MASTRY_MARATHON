6. Quiz Score Tracker  :-

let quiz = { playerName: "", score: 0, questionsAttempted: 0, correctAnswers: 0 }

Write:
• startQuiz(name) — sets the player name, resets all scores
• submitAnswer(isCorrect) — increments questionsAttempted; if correct, increments correctAnswers and adds 10 to score
• showResult() — prints name, score, accuracy percentage

EDGES: 0 questions attempted (don’t divide by zero), all wrong, all correct

-------------------------

INPUT :-

• name , corrent answer , wrong ans

PROCESS :-

• startQuiz(name) — sets the player name, resets all scores
• submitAnswer(isCorrect) — increments questionsAttempted; if correct, increments correctAnswers and adds 10 to score
• showResult() — prints name, score, accuracy percentage

OUTPUT :-

• number is odd/even/zero

EDGE :-

• 0 questions attempted (don’t divide by zero), all wrong, all correct

-------------------------

PSEUDOCODE :-

<!-- object to store quiz details -->
quiz = {
    playerName: ""
    score: 0
    questionsAttempted: 0
    correctAnswers: 0
}

<!-- function to start quiz -->
startQuiz = () => {

    <!-- select result element -->

    <!-- get player name -->

    <!-- validate empty player name -->
    IF (player name is empty){

        <!-- display error -->
        return

    }

    <!-- store player name -->

    <!-- reset score -->

    <!-- reset attempted questions -->

    <!-- reset correct answers -->

    <!-- display quiz started message -->

}

<!-- function to submit answer -->
submitAnswer = (isCorrect) => {

    <!-- select result element -->

    <!-- check quiz started -->
    IF (player name is empty){

        <!-- display error -->
        return

    }

    <!-- increment attempted questions -->

    <!-- check answer -->
    IF (answer is correct){

        <!-- increment correct answers -->

        <!-- add 10 marks to score -->

    }

    <!-- display answer submitted message -->

}

<!-- function to show result -->
showResult = () => {

    <!-- select result element -->

    <!-- check quiz started -->
    IF (player name is empty){

        <!-- display error -->
        return

    }

    <!-- check attempted questions -->
    IF (attempted questions is 0){

        <!-- accuracy = 0 -->

    }

    <!-- otherwise calculate accuracy -->

    <!-- display player name -->

    <!-- display score -->

    <!-- display attempted questions -->

    <!-- display correct answers -->

    <!-- display accuracy -->

    <!-- clear form -->

}

   




