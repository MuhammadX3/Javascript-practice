// filter

const charactors = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "red",
    gender: "Male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalter",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// find

const word = ["lion", "girrafe", "goat", "black panther"];

const finalResult = word.find((element) => element.length > 4);

// console.log(finalResult);

// findIndex

const numbers = [16, 24, 53, 70, 22];

const final = (element) => element > 60;

// console.log(numbers.findIndex(final));

// findLast

const malls = ["GoogleC", "Functions", "Robbery", "Console"];

const result = malls.findLast((element) => element.length > 6);

// console.log(result);

// findLastIndex

const mall = [
  "GoogleC",
  "Functions",
  "Robbery",
  "Console",
  "Travis",
  "John Doe",
];

const results = mall.findLastIndex((element) => element);

// console.log(results);

// pop

const fruits = ["🥭", "🍎", "🍏", "🍅", "🍇"];
fruits.pop();
fruits.push("🍍");
fruits.shift();
fruits.unshift("🍓");

// console.log(fruits);

// forEach

// includes

const clues = ["the kitchen", "Forest", "Jungle", "Bank", "Hotel"];

// console.log(clues.includes("Forest"));

// indexOf
const number = [5, 2, 52, 22, 32];

// console.log(number.indexOf(52));

// lastIndexOf
const animals = ["Dodo", "Tiger", "Cheetah", "Zebra", "Lion"];

// console.log(animals.lastIndexOf("Lion"));

// map

const names = ["John", "Alexander", "Jeffry", "Jeff"];

const name = names.map((x) => x + "s");

// console.log(name);

// slice

const words = ["book", "pencil", "pen", "Stick", "Cup"];

// console.log(words.slice(1));

// reduce

// splice

const mon = ["Jan", "March", "April", "June"];
mon.splice(1, 0, "Feb");

// console.log(mon);

// sort

const months = ["March", "May", "Feb", "Apr"];
months.sort();

// console.log(months);
