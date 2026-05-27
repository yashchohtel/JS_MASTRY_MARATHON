// scores and match count
let matchCount = 0;
let userScore = 0;
let computerScore = 0;

// select element to show points and moves of user and computer
let userPoint = document.querySelector(".myscore");
let computerPoint = document.querySelector(".computerScore");
let result = document.querySelector("#result");
let final = document.querySelector("#final");
let userMoveUi = document.querySelector(".userMove");
let computerMoveUi = document.querySelector(".computerMove");

// moves
const moves = ["rock", "paper", "scissors"];

playGame = (userMove) => {

    // reset the game
    if (matchCount >= 3) {

        // reset match count
        matchCount = 0;
        document.querySelector(".matchcount").innerHTML = `MATCH COUNT - ${matchCount}`

        // reset user and computer score
        userScore = 0;
        computerScore = 0;
        userPoint.innerHTML = userScore;
        computerPoint.innerHTML = computerScore

        // clear final inner html
        final.innerHTML = "";

    }

    // generate random number
    const computerMove = moves[Math.floor(Math.random() * 3)]

    // display user and computer move
    userMoveUi.innerHTML = userMove;
    computerMoveUi.innerHTML = computerMove;

    // match count
    if (computerMove !== userMove) {
        matchCount++;
        document.querySelector(".matchcount").innerHTML = `MATCH COUNT - ${matchCount}`
    }

    // calculate wins
    // tie (computer move = user move)
    if (computerMove === userMove) {
        result.innerHTML = `its a tie`
    }

    // (user wining moves) rock beats scissors, paper beats rock, scissors beats paper
    else if ((userMove === "rock" && computerMove == "scissors") || (userMove === "paper" && computerMove === "rock") || (userMove === "scissors" && computerMove == "paper")) {
        result.innerHTML = `you are a winner`
        userScore++;
    }

    // compunter winning move 
    else {
        result.innerHTML = `computer is a winner`
        computerScore++;
    }

    // display user and computer score
    userPoint.innerHTML = userScore;
    computerPoint.innerHTML = computerScore

    if (matchCount === 3) {

        if (userScore >= 2) {
            final.innerHTML = `you are the final winner, your score is ${userScore}/3`
        }
        else if (computerScore >= 2) {
            final.innerHTML = `computer is the final winner, computer score is ${computerScore}/3`
        }

    }

}