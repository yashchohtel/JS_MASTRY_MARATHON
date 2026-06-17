2. Simple Scoreboard :-

let scoreboard = {
    players: [],
    roundsPlayed: 0
};

Write:
- addPlayer(name)
- addPoints(name, points)
- showScoreboard()

Edges:
- Player not found
- Negative points
- Empty scoreboard

---

INPUT :-

• player name - to add player
• select player, score - to add score

PROCESS :-

- addPlayer(name)
- addPoints(name, points)
- showScoreboard()

OUTPUT :-

• player scoreboard

EDGE :-

- Player not found
- Negative points
- Empty scoreboard

---

PSEUDOCODE :-

<!-- set the object to store playes data -->
scoreboard = {
    players: [],
    roundsPlayed: 0
};

<!-- functiont to add player -->
addPlayer = () => {

    get the name input

    <!-- validate for being empty -->
    if(nameinput is empty){
        print - "pelase enter player name"
        return
    }

    <!-- create player object and insert to array -->
    player = {
        name : playername
    }

    scoreboard.push(player)

    <!-- show feed back -->

}

<!-- function to add point to player name -->
addPoint = () => {

    get user and point

    validate user and point for being empty and point for zero and negatice

    find the play object from players array and add new property point and its value

    increment round played

}

<!-- function to show scoreboard -->
showScoreboard = () => {

    validate no players available

    display roundsPlayed

    loop players array

    display player name and score

}