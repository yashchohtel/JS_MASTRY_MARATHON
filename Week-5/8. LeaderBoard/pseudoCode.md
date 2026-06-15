8. LeaderBoard :-

let leaderboard = { players: [], topScore: 0, topPlayer: "" }

Write:

• addPlayer(name, score) — adds player object, updates topScore and topPlayer if this scor is highest
• showLeaderboard() — prints all players ranked by score (highest first) with rank number
• getTopThree() — returns an array of the top 3 player objects

EDGES: Tie scores, fewer than 3 players when calling getTopThree, same player added twice

HINT: For ranking, compare two scores and rearrange manually — same loop patterns from

---

INPUT :-

•

PROCESS :-

•

OUTPUT :-

•

EDGE :-

•

---

PSEUDOCODE :-

<!-- object to store leaderboard details -->
leaderboard = {
    players: []
    topScore: 0
    topPlayer: ""
}

<!-- function to add player -->
addPlayer = () => {

    <!-- select result element -->

    <!-- get player name -->
    <!-- get player score -->

    <!-- validate player name -->
    IF (player name is empty){
        <!-- display error -->
        return
    }

    <!-- validate player score -->
    IF (player score is empty){
        <!-- display error -->
        return
    }

    <!-- convert score into number -->
    <!-- validate player score -->
    IF (player score is less than 0){
        <!-- display error -->
        return
    }

    <!-- create player object -->

    <!-- check players array -->
    IF (players array is empty){
        <!-- set top score -->
        <!-- set top player -->
        <!-- push player -->
    }

    <!-- assume first player as highest -->

    <!-- loop through players -->

    <!-- find highest score -->

    <!-- compare new player score -->

    IF (new player score is highest){

        <!-- update top score -->

        <!-- update top player -->

    }

    <!-- push player -->

    <!-- display success message -->

    <!-- check top player -->

    IF (current player is top player){

        <!-- display congratulations message -->

    }

    <!-- clear inputs -->

}

<!-- function to sort leaderboard -->

sortLeaderboard = () => {

    <!-- loop through players -->

    <!-- compare player scores -->

    IF (next player score is greater){

        <!-- swap players -->

    }

}

<!-- function to show leaderboard -->

showLeaderboard = () => {

    <!-- select result element -->

    <!-- check players array -->

    IF (players array is empty){

        <!-- display error -->

        return

    }

    <!-- sort leaderboard -->

    <!-- display top player -->

    <!-- display top score -->

    <!-- display all ranked players -->

}

<!-- function to get top three players -->

getTopThree = () => {

    <!-- select result element -->

    <!-- check players array -->

    IF (players array is empty){

        <!-- display error -->

        return

    }

    <!-- sort leaderboard -->

    <!-- display top player -->

    <!-- display top score -->

    <!-- display top three players -->

}
