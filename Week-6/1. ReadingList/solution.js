// set object structure
let readingList = {
    books: [],
    totalBooks: 0
};

// function to add book
function addBook() {

    // get input values
    let bookName = document.getElementById("bookName").value.trim();
    let authorName = document.getElementById("authorName").value.trim();

    let result = document.getElementById("result");

    // validate empty inputs
    if (bookName === "" || authorName === "") {
        result.innerHTML = "Please fill all fields.";
        return;
    }

    // validate book already exists
    for (let book of readingList.books) {

        if (book.name.toLowerCase() === bookName.toLowerCase()) {
            result.innerHTML = "Book already exists.";
            return;
        }
        
    }

    // create book object
    let book = {
        name: bookName,
        author: authorName
    };

    // add book and update total count
    readingList.books.push(book);
    readingList.totalBooks++;

    // display success message
    result.innerHTML = "Book added successfully.";

    // clear inputs
    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
}

// function to show list
function showList() {

    let result = document.getElementById("result");

    // validate no books
    if (readingList.totalBooks === 0) {
        result.innerHTML = "No books available.";
        return;
    }

    // store output
    let output = `<h3>Total Books : ${readingList.totalBooks}</h3>`;

    // loop all books
    for (let book of readingList.books) {
        output += `
            <p>
                <strong>Book:</strong> ${book.name}<br>
                <strong>Author:</strong> ${book.author}
            </p>
            <hr>
        `;
    }

    // display books
    result.innerHTML = output;
}