const library = {
  books: [
    {
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      genre: "Magic realism",
      availability: true,
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Distopía",
      availability: true,
    },
  ],
};

function readBooks(callback) {
  setTimeout(() => {
    callback(library);
  }, 2000);
}

function displayBooks() {
  readBooks((library) => {
    library.books.forEach((book, index) => {
      console.log(
        `${index + 1}.- ${book.title} - ${book.author} (${
          book.availability ? "Available" : "Checked Out"
        })`
      );
    });
  });
}

function addBook(_title, _author, _genre, _availability, callback) {
  setTimeout(() => {
    library.books.push({
      title: _title,
      author: _author,
      genre: _genre,
      availability: _availability,
    });
    if (callback) callback(); // Invoke the callback after the book is added
  }, 2000);
}

function updateBookAvailability(_title, _newAvailability, callback) {
  setTimeout(() => {
    library.books.find((book) => book.title === _title).availability =
      _newAvailability;
    if (callback) callback(); // Invoke the callback after the availability is updated
  }, 2000);
}

displayBooks();

addBook("To Kill a Mockingbird", "Harper Lee", "Fiction", true, () => {
  console.log("Book added successfully!");
});

displayBooks();

updateBookAvailability("1984", false, () => {
  console.log("Book availability updated successfully!");
});

displayBooks();