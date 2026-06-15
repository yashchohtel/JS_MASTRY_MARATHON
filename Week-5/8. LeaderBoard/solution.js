// Leaderboard Object
let leaderboard = {

    players: [
        {
            name: "mithun",
            score: 95
        },
        {
            name: "Rahul",
            score: 80
        },
        {
            name: "Aman",
            score: 88
        },
        {
            name: "Priya",
            score: 92
        }
    ],

    topScore: 95,
    topPlayer: "mithun"
    // topScore: 0,
    // topPlayer: "",
};

// function to add player
function addPlayer() {

    // select result element
    let result = document.querySelector("#result");
    result.innerHTML = "";

    // Get Inputs
    let playerName = document.getElementById("playerName").value.trim();
    let playerScore = document.getElementById("playerScore").value.trim();

    // Validation
    if (playerName === "") {
        result.innerHTML = "Please enter player name.";
        return;
    }

    if (playerScore === "") {
        result.innerHTML = "Please enter player score.";
        return;
    }

    // Convert into Number
    playerScore = Number(playerScore);

    if (playerScore < 0) {
        result.innerHTML = "Please enter a valid player score.";
        return;
    }

    // create player object
    let playerObj = {
        name: playerName,
        score: playerScore,
    }

    // if no other player
    if (leaderboard.players.length === 0) {

        // set player as highest scorrer
        leaderboard.topScore = playerScore
        leaderboard.topPlayer = playerName

        // push player object leaderboard 
        leaderboard.players.push(playerObj)

    }

    // assumen the first user as highest scorret
    let highest = leaderboard.players[0].score;

    // find highest scorrer
    for (let player of leaderboard.players) {

        if (highest < player.score) {
            highest = player.score
        }

    }

    // set user as highest scorrer if they are
    if (playerScore > highest) {
        leaderboard.topScore = playerScore
        leaderboard.topPlayer = playerName
    }

    // push player object leaderboard 
    leaderboard.players.push(playerObj)

    // Success Message

    result.innerHTML = `
    <strong>Player Added Successfully!</strong><br><br>

    <strong>Name:</strong> ${playerName}<br>
    <strong>Score:</strong> ${playerScore}<br>
    <strong>Current Top Score:</strong> ${leaderboard.topScore}<br>
    <strong>Current Top Player:</strong> ${leaderboard.topPlayer}
    `;

    // if current play is top scorrer
    if (leaderboard.topPlayer === playerName) {
        result.innerHTML += `<br><br> <strong>🏆 Congratulations!</strong> ${playerName} is now the Top Player.`;
    }

    // clear input
    document.getElementById("playerName").value = "";
    document.getElementById("playerScore").value = "";

}

// function to sort leaderboard from highest to lowest
function sortLeaderboard() {

    // sort players (Highest to Lowest)
    for (let i = 0; i < leaderboard.players.length; i++) {

        for (let j = i + 1; j < leaderboard.players.length; j++) {

            if (leaderboard.players[j].score > leaderboard.players[i].score) {

                // swap players
                let temp = leaderboard.players[i];

                leaderboard.players[i] = leaderboard.players[j];

                leaderboard.players[j] = temp;

            }

        }

    }

}

// function to show leaderboard
function showLeaderboard() {

    // select result element
    let result = document.querySelector("#result");
    result.innerHTML = "";

    // check leaderboard
    if (leaderboard.players.length === 0) {
        result.innerHTML = "No players found.";
        return;
    }

    // call sortLeaderboard to get the highes scorrer first
    sortLeaderboard();

    // show result
    result.innerHTML = `
    <h3>Top Scorer: ${leaderboard.topPlayer}</h3>
    <h3>Top Score: ${leaderboard.topScore}</h3>

    <table>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>Score</th>
            </tr>
        </thead>

        <tbody>
            ${leaderboard.players.map((player, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${player.name}</td>
                    <td>${player.score}</td>
                </tr>
            `).join("")}
        </tbody>
    </table>
`;

}

// get top three scorrer
getTopThree = () => {

    // select result element
    let result = document.querySelector("#result");
    result.innerHTML = "";

    // check leaderboard
    if (leaderboard.players.length === 0) {
        result.innerHTML = "No players found.";
        return;
    }

    // call sortLeaderboard to get the highes scorrer first
    sortLeaderboard();

    // show result
    result.innerHTML = `
    <h3>Top Scorer: ${leaderboard.topPlayer}</h3>
    <h3>Top Score: ${leaderboard.topScore}</h3>

    <table>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>Score</th>
            </tr>
        </thead>

        <tbody>
        ${leaderboard.players.slice(0, 3).map((player, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.score}</td>
        </tr>`).join("")}
        </tbody>
    </table>
`;

}