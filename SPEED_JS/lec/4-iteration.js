// example : 1
let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "SmartPhone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboard", price: 80 },
];

let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0);
// console.log(totalSales);
"hitesh".toUpperCase().indexOf("h"); // this known as pipeing / chaining.

// reduce is very important
// Interview question: make you own piping with javascript.

// example : 2 - Items less than 50

let inventory = [
  { name: "Widge A", stock: 30 },
  { name: "Widge B", stock: 120 },
  { name: "Widge C", stock: 45 },
  { name: "Widge D", stock: 70 },
];

let lowStockItems = inventory.filter((item) => {
  return item.stock < 50;
});
// console.log(lowStockItems);

// example 3:

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 72 },
  { user: "Charlie", activityCount: 33 },
];
// find most active user

let mostActiveUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);
// console.log(mostActiveUser);

// example: 4

let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expenseReport = expenses.reduce(
  (report, expenses) => {
    report[expenses.category] += expenses.amount;
    // report[expenses.category] = (report[expenses.category] || 0) + expenses.amount;
    return report;
  },
  { Food: 0, Utilities: 0 }
);
// console.log("Expense Report", expenseReport);

// exmaple 5:

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTasks = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);

// console.log(pendingSortedTasks);

// example 6:

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 3] },
];

let averageRatings = movieRatings.map((movie) => {
  let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
  let average = total / movie.ratings.length;
  // movie.ratings = average;
  // return movie
  return { title: movie.title, ratings: average.toFixed(2) };
});
// console.log(averageRatings);
// console.log(movieRatings);

// [{title: "Movie A", ratings: 3.3}, {}];

