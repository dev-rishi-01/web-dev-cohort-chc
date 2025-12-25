const addbtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoItemsContainer = document.getElementById("todo-items-Container");

addbtn.addEventListener("click", () => {
  const value = todoInput.value;

  const li = document.createElement("li"); // Create: <li></li>
  li.innerText = value; // Now: <li>value</li>

  const delButton = document.createElement("button");
  delButton.innerText = "X";
  delButton.addEventListener("click", function () {
    li.remove();
  });
  li.appendChild(delButton);

  todoItemsContainer.appendChild(li); // Add li to the <ul> or <ol>
  todoInput.value = "";
});

// - calculator, bmi Index, chess game , review collector
// 