function invertedMountain(n) {
  let mountain = '';
  // Loop for each row;
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      mountain += '*';
    };
    mountain += '\n'
  }
  return mountain;
}
console.log(invertedMountain(4))