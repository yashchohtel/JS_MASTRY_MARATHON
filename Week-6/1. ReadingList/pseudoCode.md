1. Reading List :-

let readingList = {
    books: [],
    totalBooks: 0
};

Write:
- addBook(title, author) — adds a book object, updates totalBooks
- showList() — prints each book with its number (1, 2, 3...)

Edges:
- Empty list
- Same book added twice (allow it)

---

INPUT :-

• book name and author name

PROCESS :-

• create a function what set book detialin books array in reading list object
• create a function to show book list 

OUTPUT :-

• book list

EDGE :-

• Empty list
• Same book added twice (allow it)

---

PSEUDOCODE :-

<!-- set object structure -->
let readingList = {
    books: [],
    totalBooks: 0
};

<!-- funciton to add book -->
addBook = () => {

    validate for book already exist

    get input value

    validate for inputs being empty

    add book in books array of reading list and increment totalBooks count 

}

<!-- funciton to show book -->
showList = () => {

    no book balidation check

    loop the books object of reading list object and display in ui

}