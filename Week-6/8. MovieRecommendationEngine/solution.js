// set object structure
let movieDb = {
    movies: [],
    watchedCount: 0
};

// function to add movie
function addMovie() {

    // get input values
    let movieTitle = document.getElementById("movieTitle").value.trim();
    let movieGenre = document.getElementById("movieGenre").value;
    let movieRating = document.getElementById("movieRating").value.trim();

    let movieContainer = document.getElementById("movieContainer");
    let emptyMessage = document.getElementById("emptyMessage");
    let result = document.getElementById("result");

    // validate empty inputs
    if (movieTitle === "" || movieGenre === "" || movieRating === "") {
        result.innerHTML = "Please fill all fields.";
        return;
    }

    // convert rating to number
    movieRating = Number(movieRating);

    // validate rating
    if (movieRating < 0 || movieRating > 10) {
        result.innerHTML = "Rating must be between 0 and 10.";
        return;
    }

    // validate duplicate movie
    for (let movie of movieDb.movies) {

        if (movie.title.toLowerCase() === movieTitle.toLowerCase()) {
            result.innerHTML = "Movie already exists.";
            return;
        }

    }

    // create movie object
    let movie = {
        title: movieTitle,
        genre: movieGenre,
        rating: movieRating,
        watched: false
    };

    // add movie
    movieDb.movies.push(movie);

    // hide empty message
    emptyMessage.style.display = "none";

    // display movie
    movieContainer.innerHTML += `
        <div class="movie">

            <span>
                ${movie.title} (${movie.genre}) - ⭐ ${movie.rating}
            </span>

            <label>

                <input
                    type="checkbox"
                    onchange="markWatched(${movieDb.movies.length - 1})"
                >

                Watched

            </label>

        </div>
    `;

    // show feedback
    result.innerHTML = "Movie added successfully.";

    // clear inputs
    document.getElementById("movieTitle").value = "";
    document.getElementById("movieGenre").selectedIndex = 0;
    document.getElementById("movieRating").value = "";

}

// function to mark movie as watched
function markWatched(index) {

    // find clicked movie
    let movie = movieDb.movies[index];

    // mark and unmark movie
    if (movie.watched === false) {

        movie.watched = true;
        movieDb.watchedCount++;

    } else {

        movie.watched = false;
        movieDb.watchedCount--;

    }

}

// function to recommend movie
function recommend() {

    // get input
    let genre = document.getElementById("recommendGenre").value;
    let result = document.getElementById("result");

    // validate no movies
    if (movieDb.movies.length === 0) {
        result.innerHTML = "No movies found.";
        return;
    }

    // validate empty genre
    if (genre === "") {
        result.innerHTML = "Please select a genre.";
        return;
    }

    // find recommended movies
    let recommendedMovies = movieDb.movies.filter(
        movie => movie.genre.toLowerCase() === genre.toLowerCase() 
    );

    // validate no recommendation
    if (recommendedMovies.length === 0) {
        result.innerHTML = "No movies available for recommendation.";
        return;
    }

    // store output
    let output = "";

    // display recommended movies
    for (let movie of recommendedMovies) {

        output += `
            <p>
                <strong>Title:</strong> ${movie.title}<br>
                <strong>Genre:</strong> ${movie.genre}<br>
                <strong>Rating:</strong> ⭐ ${movie.rating}
            </p>
            <hr>
        `;

    }

    // display result
    result.innerHTML = output;

}

// function to show stats
function showStats() {

    let result = document.getElementById("result");

    // validate no movies
    if (movieDb.movies.length === 0) {
        result.innerHTML = "No movies found.";
        return;
    }

    // display stats
    result.innerHTML = `
        <p><strong>Total Movies:</strong> ${movieDb.movies.length}</p>
        <p><strong>Watched Movies:</strong> ${movieDb.watchedCount}</p>
        <p><strong>Unwatched Movies:</strong> ${movieDb.movies.length - movieDb.watchedCount}</p>
    `;

}

