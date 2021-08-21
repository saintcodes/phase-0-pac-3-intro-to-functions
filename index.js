// Follow along with the examples here
function doNothing() {}

function sayHello() {
  console.log("Hello!")
}

sayHello()

function sayHelloToIsabel() {
  console.log("Hello Isabel!")
}

sayHelloToIsabel()

function sayHelloToSofia() {
  console.log("Hello Sofia!")
}

sayHelloToSofia()

function sayHelloToBrandon() {
  console.log("Hello Brandon!")
}

sayHelloToBrandon()

function doSomething(thing) {
  console.log(thing);
}

doSomething("anything");

doSomething()

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Isabel"); // "Hello, Isabel!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}

say("Goodbye", "Julio");
say("Julio", "hello");

function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}

console.log()

function add(x, y) {
  return x + y;
}

console.log(add(1,2))

function say(greeting, firstName) {
  return `${greeting}, ${firstName}`
}

console.log(say("Hello", "Sofia"))

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}

function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
  console.log("I was called!");
}

console.log(say("Howdy", "partner"));


function say(greeting, firstName) {
  console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}

console.log(say("Howdy", "partner"));

function say(dayOfTheWeek, monthAndDay) {
  return `${dayOfTheWeek}, ${monthAndDay}`
}

console.log(say("Thursday", "February, 6th"));

console.log("Today is " + say("Thursday", "February 6th"));  
