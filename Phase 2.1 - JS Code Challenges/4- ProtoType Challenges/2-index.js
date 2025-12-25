// You need to implement the Robot constructor function and its prototype method

function Robot(name, batteryLevel) {
  // Initialize name and batteryLevel properties
  this.name = name;
  this.batteryLevel = batteryLevel;
}
Robot.prototype.charge = function () {
  this.batteryLevel = Math.min(this.batteryLevel + 20, 100);
    console.log(`${this.name} is charging... Battery is now ${this.batteryLevel}%`);

};

// Create robot objects
const robot1 = new Robot("RoboMax", 50);
const robot2 = new Robot("AutoBot", 90);

// Print initial states
console.log("Initial States:");
console.log(robot1.name, robot1.batteryLevel); // RoboMax 50
console.log(robot2.name, robot2.batteryLevel); // AutoBot 90

// Charge both robots
console.log("\nCharging Robots...");
robot1.charge(); // Battery becomes 70
robot2.charge(); // Battery becomes 100 (max)

// Final states
console.log("\nFinal States:");
console.log(robot1.name, robot1.batteryLevel); // RoboMax 70
console.log(robot2.name, robot2.batteryLevel); // AutoBot 100
