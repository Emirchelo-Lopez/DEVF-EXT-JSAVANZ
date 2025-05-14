// const asyncPromise = (num1, num2) => {
//   const sum = num1 + num2;
//   return new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(sum);
//     }, 3000);
//   });
// };

// asyncPromise(1, 3).then(result => console.log(result));

// const data = ""
const data = [
  {
    title: "Book One",
    year: 2001,
    isbn: "123-456-789",
    author: "Author One",
  },
  {
    title: "Book Two",
    year: 2005,
    isbn: "987-654-321",
    author: "Author Two",
  },
  {
    title: "Book Three",
    year: 2010,
    isbn: "456-789-123",
    author: "Author Three",
  },
];


// SIMULATION OF FETCHING DATA FROM AN API OR AN EXTERNAL SERVER
function getData() {
  return new Promise((resolve, reject) => {
    if (data.length === 0) {
      reject(new Error("Data is empty"));
    }

    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
}


// === ASYNCHRONISM WITH PROMISES ===
// getData()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });


// === ASYNCRHONISM WITH ASYNC/AWAIT
async function asyncGetData() {
  const books = await getData();
  console.log(books);
}

asyncGetData();