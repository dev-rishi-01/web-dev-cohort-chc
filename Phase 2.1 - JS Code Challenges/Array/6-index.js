// You just need to implement the filterHealthy function
// Remove unhealthy food and return updated list

function filterHealthy(foodList, unhealthyFood) {
  return foodList.filter((item) => item !== "Burger");
}

// You just need to implement the filterHealthy function
// Remove unhealthy food items from the list

function filterHealthy(foodList, unhealthyFood) {
  return foodList.filter((item) => !unhealthyFood.includes(item));
}

// Example usage:
let foods = ["Apple", "Burger", "Salad", "Pizza", "Carrot"];
let unhealthy = ["Burger", "Pizza"];

let healthyFoods = filterHealthy(foods, unhealthy);
console.log(healthyFoods);
