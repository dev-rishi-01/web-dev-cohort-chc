// console.log(window);
// document.write('Hello there');
// console.log('Learning js is fun');

function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

// Event Listener -

// Creating a toggle: Dark and Light Mode

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
  console.log(document.body.style.backgroundColor);
  const currentColor = document.body.style.backgroundColor;

  if (!currentColor || currentColor === "white") {
    changeBackground("black");
    themeButton.innerText = "Light Mode";
  } else {
    changeBackground("white");
    themeButton.innerText = "Dark Mode";
  }
});

// Toggle kya hota hai sir?? - ON ko OFF and OFF ko ON
// refactor - means renaming
// rendering - when the whole website layout is ready is known as rendering
