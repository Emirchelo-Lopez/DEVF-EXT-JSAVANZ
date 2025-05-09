const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    availability: "Available",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    availability: "Checked Out",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    availability: "Available",
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    availability: "Available",
  },
];

/*

1. Crear un objeto JSON: Empezarás con un objeto JSON que contenga una colección de libros. Cada libro tendrá las propiedades `titulo`, `autor`, `genero` y `disponible`.
2. Simular una función para leer datos: Usarás un callback para simular la lectura de un archivo JSON. Esta función tomará el objeto JSON y lo devolverá con un pequeño retraso (simulando una operación de lectura asincrónica).
3. Crear funciones para interactuar con el inventario: Necesitarás funciones que permitan agregar libros, actualizar su disponibilidad y consultar el inventario.
4.(Opcional) Simular escritura en JSON: Similar a la lectura, simula la escritura de datos en un archivo JSON usando un callback. Esto se hará cuando se agregue un nuevo libro o se actualice la disponibilidad de un libro.
Puedes consultar un extracto de código para comenzar con la solución, se incluye un ejmplo de lo que se espera en la siguiente url: https://gist.github.com/heladio-devf-mx/b7f9cd1ffe11e2fd9a46cba6ef019ea1

*/

function getBooks(callback) {
  setTimeout(() => {
    callback(books);
  }, 2000);
}

function postBook(_title, _author, _genre, _availability) {
  books.push({
    title: _title,
    author: _author,
    genre: _genre,
    availability: _availability,
  });
}

function patchBookAv(_title, _availability) {
    const book = books.find(book => book.title === _title);
    if(book) {
        book.availability = _availability;
        return `The book "${_title}" is updated to "${book.availability}"`
    } else {
        return `The book "${_title}" couldn't be updated`;
    }
}

function checkBookStock(_title) {
    const book = books.find(book => book.title === _title);
    if (book) {
        return `The book "${_title}" is ${book.availability}.`;
    } else {
        return `The book "${_title}" is not in the inventory.`;
    }
}
// Example usage:
// readBooks((data) => {
//     console.log(data);
// });
