// 🔹 Starting data: list of books with title, id, and rented count
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// 🔹 Exercise 1: get the list of book titles
const bookTitles = [];
for (let i = 0; i < books.length; i++) {
  bookTitles.push(books[i].title);
}
console.log("Book titles:");
console.log(bookTitles);

// 🔹 Exercise 2: check if all books have been rented at least once
let allRented = true;
for (let i = 0; i < books.length; i++) {
  if (books[i].rented === 0) {
    allRented = false;
    break; // stop loop if any book has never been rented
  }
}
console.log("All books rented at least once? ", allRented);

// 🔹 Exercise 3: find the most rented book
let mostRented = books[0];
for (let i = 1; i < books.length; i++) {
  if (books[i].rented > mostRented.rented) {
    mostRented = books[i];
  }
}
console.log("Most rented book:");
console.log(mostRented);

// 🔹 Exercise 4: find the least rented book
let leastRented = books[0];
for (let i = 1; i < books.length; i++) {
  if (books[i].rented < leastRented.rented) {
    leastRented = books[i];
  }
}
console.log("Least rented book:");
console.log(leastRented);

// 🔹 Exercise 5: remove the book with ID 133712
for (let i = 0; i < books.length; i++) {
  if (books[i].id === 133712) {
    books.splice(i, 1); // remove 1 element at index i
    break; // stop after removing
  }
}
console.log("Books after removing ID 133712:");
console.log(books);
