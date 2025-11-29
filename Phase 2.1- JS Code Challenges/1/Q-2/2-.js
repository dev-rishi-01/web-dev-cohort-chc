// Your code starts here
// You just need to implement the remainingApples function
function remainingApples(totalApples, givenAway) {
  // Return totalApples minus givenAway
  return totalApples - givenAway
}
remainingApples(20, 5)

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain totalApples and givenAway
  const { totalApples, givenAway } = JSON.parse(input);

  // Call our function
  const result = remainingApples(totalApples, givenAway);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above

