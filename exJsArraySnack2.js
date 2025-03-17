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
function somme(a, b) {
  return a + b;
}
console.log("La somma è : ", somme(4, 9));
//*i libri che hanno più di 300 pagine :

const longBook = books.filter((book) => book.pages > 300);
console.log(longBook);
//*Solo i nomi dei libri con più di 300 pagine:
const longBooksTitle = longBook.map((book) => book.title);
console.log(longBooksTitle);
//*Stampo in console ogni titolo nella console.
books.forEach((book) => console.log("Titolo : ", book.title));
//!Snack-2
//*Creare un array (availableBooks) che contiene tutti i libri disponibili :
const availableBooks = books.filter((book) => {
  if (book.available === true) {
    return book;
  }
});
console.log(" available Book : ", availableBooks);
//* Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)

const discountedBooks = availableBooks.map((book) => {
  const prezzo = parseInt(book.price.replace("€", ""));
  console.log("la stringa del numero prima la conversione :  ", book.price);
  console.log("prezzo prima dello sconto ", prezzo);
  const discount = (prezzo - prezzo * 0.2).toFixed(2);
  console.log("prezzo scontato : ", discount);
  return {
    ...book,
    price: `${discount}€`,
  };
});

console.log("Libri con prezzi scontati : ", discountedBooks);

//* Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
const fullPricedBook = discountedBooks.find((book) => {
  const prezzo = parseFloat(book.price.replace("€", ""));
  console.log("fff", prezzo);
  let prezzoFinale = !prezzo.toString().includes(".");
  return prezzoFinale;
});

console.log(fullPricedBook);
