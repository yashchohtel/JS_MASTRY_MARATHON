// object to store movie watch list data 
let = watchlist = {
    movies: [],
    totalAdded: 0
}

// function to show movie list
showMovieList = () => {

    // result element
    let result = document.querySelector("#result")

    // no movie validation
    if (watchlist.totalAdded === 0) {
        result.innerHTML = "empty watch list please add a movie";
        return;
    }

    // show 
    let output = `<p> <span>Total Movies :</span> ${watchlist.totalAdded}</p>`;

    for (let movie of watchlist.movies) {
        output += `------ <br> <p>${movie.name} - ${movie.genre}</p>`;
    }

    result.innerHTML = output;

}

// a function to add movie on watchList
addMovie = () => {

    // get input value
    const movieName = document.getElementById("movieName").value.trim();
    const movieGenre = document.getElementById("movieGenre").value.trim();

    // result element
    let result = document.querySelector("#result")

    // empty field validation
    if (!movieName || !movieGenre) {
        result.innerHTML = "Please enter both fields";
        return;
    }
    // duplicate titles validation

    for (let movie of watchlist.movies) {

        if (movie.name.toLowerCase() === movieName.toLowerCase()) {
            result.innerHTML = `${movieName} is already added`;
            return
        }

    }

    // create movie item object
    const movieItem = {
        name: movieName,
        genre: movieGenre
    }

    // add to watchlist 
    watchlist.movies.push(movieItem);

    // increment watchlist count
    watchlist.totalAdded++

    // show result
    result.innerHTML = `movie added : ${movieName} (${movieGenre})`

    // clear input field
    document.getElementById("movieName").value = "";
    document.getElementById("movieGenre").value = "";

}

// function to show movie by genere
searchByGenre = () => {

    // result element
    let result = document.querySelector("#result")

    // genere input
    const movieGenre = document.getElementById("movieGenre").value.trim();

    // empty check
    if (!movieGenre) {
        result.innerHTML = "Please enter a genre";
        return;
    }

    // create output
    let output = "";

    for (let movie of watchlist.movies) {

        if ( movie.genre.toLowerCase() === movieGenre.toLowerCase()) {
            output += `<p>${movie.name} - ${movie.genre}</p>`;
        }

    }

    // no movie found output
    if (!output) {
        result.innerHTML = "No movies found";
        document.getElementById("movieGenre").value = ""
        return;
    }

    // show result
    result.innerHTML = output;

    // clear input
    document.getElementById("movieGenre").value = ""

}