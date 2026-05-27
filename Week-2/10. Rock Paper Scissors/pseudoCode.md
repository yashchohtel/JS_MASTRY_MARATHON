10. Rock Paper Scissors with Score :-

User plays 3 rounds against the computer. Each round:
→ User picks rock, paper, or scissors
→ Computer picks randomly
→ Determine round winner, track score
After round 3, declare the overall winner.

EDGES tie in a round (no one scores), final tie across 3 rounds, invalid input like "rcok"

---

INPUT :-

• user select rock paper or scissors from button

PROCESS :-

• create the array to store moves [rock,paper,scissors] which will be select randomly using random number between 0 to 2 as index, for computer move
• get the user move and computer and compare if both are equal match tie no score incremented, no match round counted
• compare both of the move and declare according to rule
• and after 3 round declare the final winner and result and reset the game

OUTPUT :-
• per round winner
• final winner after 3 round

EDGE :-
• tie in a round (no one scores), final tie across 3 rounds, invalid input like "rcok"

---

PSEUDOCODE :-

<!-- create all the variable and array to store moves name and score and round count -->

let matchCount = 0;
let userScore = 0;
let computerScore = 0;
let moves = ["rock", "paper", "scissors"];

<!-- create the funcion playGame and get user move by passing move name as argument and revice in parameter name userMove -->
FUNCTION (userMove) {

    <!-- generate random number between 0 - 2 and use random number to access a move from the array -->
    computerMove = moves[Math.floor(Math.random() * 3)]

    <!-- now we have userMove and computerMove -->
    display userMove and computerMove in ui by select the respective element 

    <!-- if move are not equal then increment the match count (round), tie is not considered as round -->
    IF (usermove == computermove)
        increment matchCount and display in ui

    <!-- compare both move for tie -->
    IF (usermove == computermove)
      display - its a tie (no score increment, no round increment)

    <!-- calculate user wining moves - rock beats scissors, paper beats rock, scissors beats paper -->
    IF ((userMove === "rock" && computerMove == "scissors") || (userMove === "paper" && computerMove === "rock") || (userMove === "scissors" && computerMove == "paper"))
        diaplay - user wins and increment userScore

    <!-- else ever other move then tie or user wining move is computer winning move -->
    ELSE 
        display - computer wins and increment computerScore

    <!-- display user and computer score in ui -->
        userPoint.innerHTML = userScore;
    computerPoint.innerHTML = computerScore

    <!-- declare the final winner when three rounds are complted -->
    IF (matchCount === 3) {

        IF (userScore >= 2) {
            final.innerHTML = `you are the final winner, your score is ${userScore}/3`
        }
        else if (computerScore >= 2) {
            final.innerHTML = `computer is the final winner, computer score is ${computerScore}/3`
        }

    }

    <!-- RESET THE GAME (this part should be on the top the funciton) -->
    IF (matchCount >= 3) {

        <!-- reset match count -->
        matchCount = 0;
        display - match count zero

        <!-- reset user and computer score -->
        userScore = 0;
        computerScore = 0;
        display user score = userScore;
        display computer score = computerScore

        <!-- clear final inner html -->
        final.innerHTML = "";

    }

}