// You just need to implement the totalStars function
function totalStars(starLevels) {
  let total = 0;
  // Loop through each level and add the number of stars to total
  for (let i = 0; i < starLevels.length; i++) {
    total += starLevels[i].length;
  }
  return total;
}

totalStars(10)