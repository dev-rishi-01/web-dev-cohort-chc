function shinyDiamondRug(n) {
  let diamond = "";

  // Upper part of the diamond (including the middle line)
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      diamond += " "; // Space before the stars
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      diamond += "*"; // Stars on each line
    }
    diamond += "\n"; // Move to the next line after each row
  }

  // Lower part of the diamond (after the middle line)
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      diamond += " "; // Space before the stars
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      diamond += "*"; // Stars on each line
    }
    diamond += "\n"; // Move to the next line after each row
  }

  return diamond;
}

console.log(shinyDiamondRug(4));
