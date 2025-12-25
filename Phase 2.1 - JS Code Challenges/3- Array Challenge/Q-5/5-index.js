// You just need to implement the sortBooks function
// Sort the books alphabetically and return the updated list

function sortBooks(books) {
  books.sort();
  return books;
}
let books = [
  "Maths-1",
  "Science-A",
  "Science-B",
  "Maths-2",
  "Hindi",
  "English",
  "Tamil",
];
console.log(sortBooks(books));
