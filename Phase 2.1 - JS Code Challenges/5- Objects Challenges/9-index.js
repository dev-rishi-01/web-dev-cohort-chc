// You just need to implement the deepClone function
function deepClone(obj) {
  // Return a deep copy of obj
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}