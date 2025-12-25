// You just need to implement the workingDays function
function workingDays(days) {
  // your code here
  // Initialize count to 0
  let count = 0;
  // Loop through each day and count working days
  for (let i = 0; i < days.length; i++) {
    if (days[i] !== "Saturday" && days[i] !== "Sunday") {
      count++;
    }
  }
  return count;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // Parse input (expected to be a JSON string array of days)
  const days = JSON.parse(input);

  // Call our function
  const result = workingDays(days);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
