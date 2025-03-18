const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];

//!Snack-1
//*Funzione che somma due numeri :
// function somme(a, b) {
//   return a + b;
// }
// console.log("La somma è : ", somme(4, 9));
//*i libri che hanno più di 300 pagine :

// const longBook = books.filter((book) => book.pages > 300);
// console.log(longBook);
// //*Solo i nomi dei libri con più di 300 pagine:
// const longBooksTitle = longBook.map((book) => book.title);
// console.log(longBooksTitle);
// //*Stampo in console ogni titolo nella console.
// books.forEach((book) => console.log("Titolo : ", book.title));
//!Snack-2
//*Creare un array (availableBooks) che contiene tutti i libri disponibili :
// const availableBooks = books.filter((book) => {
//   if (book.available === true) {
//     return book;
//   }
// });
// console.log(" available Book : ", availableBooks);
//* Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)

// const discountedBooks = availableBooks.map((book) => {
//   const prezzo = parseInt(book.price.replace("€", ""));
//   console.log("la stringa del numero prima la conversione :  ", book.price);
//   console.log("prezzo prima dello sconto ", prezzo);
//   const discount = (prezzo - prezzo * 0.2).toFixed(2);
//   console.log("prezzo scontato : ", discount);
//   return {
//     ...book,
//     price: `${discount}€`,
//   };
// });

// console.log("Libri con prezzi scontati : ", discountedBooks);

//* Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
// const fullPricedBook = discountedBooks.find((book) => {
//   const prezzo = parseFloat(book.price.replace("€", ""));
//   console.log("fff", prezzo);
//   let prezzoFinale = !prezzo.toString().includes(".");
//   return prezzoFinale;
// });

// console.log(fullPricedBook);
// //!Snack-3
//* Creare un array (authors) che contiene gli autori dei libri.
// const authors = books.map((book) => book.author);
// console.log("gli autori dei libri", authors);

//*Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
// const areAuthorsAdults = books.every((author) => author.author.age >= 18);
// console.log(areAuthorsAdults);
//*Ordina l’array authors in base all’età, senza creare un nuovo array.se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)
// authors.sort((a, b) => {
//   if (areAuthorsAdults === true) {
//     return a.age - b.age;
//   } else {
//     return b.age - a.age;
//   }
// });
// console.log("authors Ordinato in base alla areAuthorsAdults: ", authors);

//!snack-4
//* Creare un array (ages) che contiene le età degli autori dei libri.
// const ages = books.map((book) => book.author.age);
// console.log("le età degli autori dei libri :", ages);
//* Calcola la somma delle età (agesSum) usando reduce
// const agesSum = ages.reduce((acc, cur) => {
//   return (acc += cur);
// }, 0);
// console.log("la somma delle età :", agesSum);

//* Stampa in console l’età media degli autori dei libri
// const etàMedia = agesSum / ages.length;
// console.log("l’età media degli autori dei libri:", etàMedia);
//!snack-5

// async function getBooks() {
//   const ids = [2, 13, 7, 21, 19];
//   const promises = ids.map((id) => {
//     return fetch(
//       `https://boolean-spec-frontend.vercel.app/freetestapi/books/${id} `
//     ).then((res) => res.json());
//   });

//   const allPromise = await Promise.all(promises);
//   return allPromise;
// }

// getBooks()
//   .then((data) => console.log("array di libri : ", data))
//   .catch((error) => console.log(error));

//!Snack-6
//*Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
// const areThereAvailableBooks = books.some((book) => book.available);
// console.log("c’è almeno un libro disponibile ? :  ", areThereAvailableBooks);
//*Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).

// const booksByPrice = books.sort((a, b) => {
//   return parseFloat(a.price) - parseFloat(b.price);
// });
// console.log(booksByPrice);
//* Ordina l’array booksByPricein base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.

// const booksByPricein = books.sort((a, b) => b.available - a.available);
// console.log(booksByPricein);
//!Snack-7
// const tagCounts = books.reduce((acc, book) => {
//   //  itero su ogni tag del libro
//   book.tags.forEach((tag) => {
//     if (acc[tag]) {
//       //  incremento il contatore per il tag
//       acc[tag]++;
//     } else {
//       //  inizializzo il tag con valore 1
//       acc[tag] = 1;
//     }
//   });
//   return acc;
// }, {});

// console.log(tagCounts);
