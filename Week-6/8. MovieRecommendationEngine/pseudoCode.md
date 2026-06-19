8. Movie Recommendation Engine :-

let movieDb = {
    movies: [],
    watchedCount: 0
};

Write:
- addMovie(title, genre, rating)
- markWatched(title)
- recommend(genre)
- showStats()

Edges:
- No unwatched movies in genre
- Genre not found
- markWatched on already-watched movie
- Empty database

Hint:

- For sorting by rating, use the same manual sort pattern from Problem 08 in Week 5.

---

INPUT :-

• title, genre, rating - to add movie
• movie object index in array - to mark watch/unwatch
• genre - to recommend movie

PROCESS :-

- addMovie(title, genre, rating)
- markWatched(title)
- recommend(genre)
- showStats()

OUTPUT :-

• reommanded movie

EDGE :-

- No unwatched movies in genre
- Genre not found
- markWatched on already-watched movie
- Empty database

---

PSEUDOCODE :-

<!-- function to add movie -->
addMovie = () => {

    get title, genre and rating

    validate empty inputs

    convert rating to number

    validate rating

    validate duplicate movie

    create movie object

    add movie to movies array

    hide empty message

    display movie

    show success message

    clear inputs

}

<!-- function to recommend movie -->
recommend = () => {

    get genre

    validate no movies

    validate empty genre

    find unwatched movies by genre

    validate no recommendation

    create output variable

    display recommended movies

}

<!-- function to show stats -->
showStats = () => {

    validate no movies

    display total movies

    display watched movies

    display unwatched movies

}