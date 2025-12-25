// Create a function that adds a puppy to the front of the queue and return the updated queue.

let arr = ["Max", "Buddy"];

function addPuppy(queue, PuppyName) {
  queue.unshift(PuppyName);
  return queue;
}

console.log(addPuppy(arr, "Doggie"));
