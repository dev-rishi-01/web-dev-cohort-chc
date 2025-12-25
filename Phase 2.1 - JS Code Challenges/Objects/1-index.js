// You just need to implement the createStudentProfile function
function createStudentProfile(name, age, grade) {
  // Return an object with name, age, and grade
  if (
    typeof name != "string" ||
    typeof grade != "string" ||
    typeof age != "number" ||
    age <= 5 ||
    name === ""
  ) {
    return "Invalid input";
  }
  return { name, age, grade };
};

