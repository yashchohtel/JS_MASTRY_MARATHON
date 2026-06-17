// set the object to store players data
let scoreboard = {
    players: [],
    roundsPlayed: 0
};

// function to add player
function addPlayer() {

    // get input
    let playerName = document.getElementById("playerName").value.trim();
    let result = document.getElementById("result");

    // validate empty input
    if (playerName === "") {
        result.innerHTML = "Please enter player name.";
        return;
    }

    // create player object
    let player = {
        name: playerName,
        score: 0
    };

    // add player to array
    scoreboard.players.push(player);

    // insert player into select
    playerList.innerHTML += `
        <option value="${player.name}">
            ${player.name}
        </option>
    `;

    // show feedback
    result.innerHTML = "Player added successfully.";

    // clear input
    document.getElementById("playerName").value = "";
}

// function to add points
function addPoints() {

    // get inputs
    let playerName = document.getElementById("playerList").value;
    let playerPoints = Number(document.getElementById("playerPoints").value);
    let result = document.getElementById("result");

    // validate inputs
    if (playerName === "" || playerPoints <= 0) {
        result.innerHTML = "Please select player and enter valid points.";
        return;
    }

    // find player and add points
    for (let player of scoreboard.players) {
        if (player.name === playerName) {
            player.score += playerPoints;
            break;
        }
    }

    // increment rounds played
    scoreboard.roundsPlayed++;

    // show feedback
    result.innerHTML = "Points added successfully.";

    // clear points input
    document.getElementById("playerPoints").value = "";
    document.getElementById("playerList").value = "";
}

// function to show scoreboard
function showScoreboard() {

    let result = document.getElementById("result");

    // validate no players
    if (scoreboard.players.length === 0) {
        result.innerHTML = "No players found.";
        return;
    }

    // store output
    let output = `
        <h3>Rounds Played : ${scoreboard.roundsPlayed}</h3>
    `;

    // loop players
    for (let player of scoreboard.players) {
        output += `
            <p>
                <strong>Name:</strong> ${player.name}<br>
                <strong>Score:</strong> ${player.score}
            </p>
            <hr>
        `;
    }

    // display scoreboard
    result.innerHTML = output;
}