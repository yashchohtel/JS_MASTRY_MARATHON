// object to store quiz data
let quiz = {
    playerName: "",
    score: 0,
    questionsAttempted: 0,
    correctAnswers: 0
};

// start quiz
function startQuiz() {

    const playerName = document.getElementById("playerName").value.trim();
    const result = document.querySelector(".result");

    result.innerHTML = "";

    // validation
    if (playerName === "") {
        result.innerHTML = "<p>• Please enter player name.</p>";
        return;
    }

    // reset quiz
    quiz.playerName = playerName;
    quiz.score = 0;
    quiz.questionsAttempted = 0;
    quiz.correctAnswers = 0;

    result.innerHTML = `
        <p>Quiz Started Successfully!</p>

        <p>Player: ${quiz.playerName}</p>
        <p>Click Correct Answer or Wrong Answer to submit answers.</p>
    `;

}

// submit answer
function submitAnswer(isCorrect) {

    const result = document.querySelector(".result");

    // check quiz started
    if (quiz.playerName === "") {
        result.innerHTML = "<p>• Please start the quiz first. Enter name and click start quiz</p>";
        return;
    }

    // attempted question
    quiz.questionsAttempted++;

    // correct answer
    if (isCorrect) {
        quiz.correctAnswers++;
        quiz.score += 10;
    }

    result.innerHTML = `
        <h3>Answer Submitted!</h3>

        <p><strong>Score:</strong> ${quiz.score}</p>
        <p><strong>Questions Attempted:</strong> ${quiz.questionsAttempted}</p>
        <p><strong>Correct Answers:</strong> ${quiz.correctAnswers}</p>
    `;
}

// show result
function showResult() {

    const result = document.querySelector(".result");

    // check quiz started
    if (quiz.playerName === "") {
        result.innerHTML = "<p>• Please start the quiz first.</p>";
        return;
    }

    // calculate accuracy
    let accuracy = 0;

    if (quiz.questionsAttempted > 0) {
        accuracy = (quiz.correctAnswers / quiz.questionsAttempted) * 100;
    }

    result.innerHTML = `
        <h3>Quiz Result</h3>

        <p><strong>Player:</strong> ${quiz.playerName}</p>
        <p><strong>Score:</strong> ${quiz.score}</p>
        <p><strong>Questions Attempted:</strong> ${quiz.questionsAttempted}</p>
        <p><strong>Correct Answers:</strong> ${quiz.correctAnswers}</p>
        <p><strong>Accuracy:</strong> ${accuracy.toFixed(2)}%</p>
    `;

    // clear form
    document.getElementById("playerName").value = "";
}