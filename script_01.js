// 🔹 Starting data: list of entrepreneurs with first name, last name, and year of birth
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// 🔹 EXERCISE 1: create a new array containing only first and last names
const entrepreneursNames = [];

// Loop through each entrepreneur in the original array
for (let i = 0; i < entrepreneurs.length; i++) {
  const entrepreneur = entrepreneurs[i];

  // Create a new object with only first and last name
  const newEntrepreneur = {
    first: entrepreneur.first,
    last: entrepreneur.last
  };

  // Add the new object to the array
  entrepreneursNames.push(newEntrepreneur);
}

// Display the result of Exercise 1 in the console
console.log("Exercise 1 — First and last names only:");
console.log(entrepreneursNames);

// 🔹 EXERCISE 2: create a new array with readable keys and calculate age
const currentYear = new Date().getFullYear(); // Get the current year
const entrepreneursAge = [];

// Loop through each entrepreneur
for (let i = 0; i < entrepreneurs.length; i++) {
  const entrepreneur = entrepreneurs[i];

  // Calculate age by subtracting birth year from current year
  const age = currentYear - entrepreneur.year;

  // Create a new object with readable keys and age
  const newEntrepreneur = {
    firstName: entrepreneur.first,
    lastName: entrepreneur.last,
    age: age
  };

  // Add the new object to the array
  entrepreneursAge.push(newEntrepreneur);
}

// Display the result of Exercise 2 in the console
console.log("Exercise 2 — With age and readable keys:");
console.log(entrepreneursAge);

// 🔹 Create a new array to store only entrepreneurs born in the 1970s
const entrepreneurs70s = [];

// Loop through each entrepreneur in the entrepreneursAge array
for (let i = 0; i < entrepreneursAge.length; i++) {
  const entrepreneur = entrepreneursAge[i];

  // Check if the entrepreneur was born in the 1970s
  // 1970 to 1979
  const birthYear = currentYear - entrepreneur.age; // get original birth year

  if (birthYear >= 1970 && birthYear <= 1979) {
    // Add the entrepreneur to the new array
    entrepreneurs70s.push(entrepreneur);
  }
}

// Display the result in the console
console.log("Exercise 3 — Entrepreneurs born in the 1970s:");
console.log(entrepreneurs70s);
