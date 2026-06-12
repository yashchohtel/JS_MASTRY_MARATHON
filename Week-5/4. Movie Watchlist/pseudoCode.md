4. Movie Watclist :-

Create a state object:

let watchlist = { movies: [], totalAdded: 0 }

Write:
• addMovie(title, genre) — adds a movie object to the list
• showWatchlist() — prints each movie’s title and genre
• countByGenre(genre) — returns how many movies match that genre

EDGES: Empty watchlist, genre with no matches, duplicate titles

-------------------------

INPUT :-

• movie name genere 

PROCESS :-

• addMovie(title, genre) — adds a movie object to the list
• showWatchlist() — prints each movie’s title and genre
• countByGenre(genre) — returns how many movies match that genre

OUTPUT :-

• movie added status 
• watch list
• movie by genre

EDGE :-

• Empty watchlist, genre with no matches, duplicate titles

-------------------------

PSEUDOCODE :-

<!-- object to store movie watch list data -->
watchlist = {

    <!-- store all movies -->
    movies: []

    <!-- store total added movies -->
    totalAdded: 0

}

<!-- function to show movie list -->
showMovieList = () => {

    <!-- select result element -->

    <!-- check watchlist is empty -->
    IF (totalAdded === 0){

        print - "empty watch list please add a movie"
        return

    }

    <!-- create output with total movies -->

    <!-- loop all movies -->

    <!-- add movie name and genre to output -->

    <!-- display output -->

}

<!-- function to add movie -->
addMovie = () => {

    <!-- get movie name -->
    <!-- get movie genre -->

    <!-- select result element -->

    <!-- validate empty fields -->
    IF (movieName is empty OR movieGenre is empty){

        print - "Please enter both fields"
        return

    }

    <!-- check duplicate movie title -->
    FOR LOOP movie of watchlist.movies {

        IF (movie already exists){

            print - "movie already added"
            return

        }

    }

    <!-- create movie object -->
    movieItem = {
        name
        genre
    }

    <!-- push movie into watchlist -->

    <!-- increment totalAdded -->

    <!-- display success message -->

    <!-- clear input fields -->

}

<!-- function to search movie by genre -->
searchByGenre = () => {

    <!-- select result element -->
    <!-- get genre input -->

    <!-- validate empty genre -->
    IF (genre is empty){
        print - "Please enter a genre"
        return
    }

    <!-- create output variable -->

    <!-- loop all movies -->

        IF (movie genre matches){

            <!-- add movie to output -->

        }

    <!-- check no movie found -->
    IF (output is empty){

        print - "No movies found"

        <!-- clear genre input -->

        return

    }

    <!-- display output -->

    <!-- clear genre input -->

}