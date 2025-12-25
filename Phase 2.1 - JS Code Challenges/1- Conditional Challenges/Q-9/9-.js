// You just need to implement the convertTemperature function
function convertTemperature(value, scale) {
  // Convert temperature based on the scale ("C" to "F" or "F" to "C")
  switch (scale) {
    case "C": // Convert Celsius to Fahrenheit
      return (value * 9) / 5 + 32 + "°F";

    case "F": // Convert Fahrenheit to Celsius
      return ((value - 32) * 5) / 9 + "°C";

    default: // Invalid scale
      return "Invalid scale";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { value, scale } = JSON.parse(input);
  const result = convertTemperature(value, scale);
  process.stdout.write(JSON.stringify(result));
});
