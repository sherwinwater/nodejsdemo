const firstApp = require("./firstApp");

// console.log(firstApp);
// console.log(firstApp.sum(1,34));
// console.log(firstApp.PI);
// console.log(firstApp.SomeMathObject);
// console.log(new firstApp.SomeMathObject());

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("firstApp", (n1, n2) => {
  console.log(n1 + n2);
});
eventEmitter.emit("firstApp", 1, 4);

eventEmitter.on('hello', args => {
  console.log('this is ', args);
});
eventEmitter.emit('hello', { id: 1, url: 'http://' });

class Person extends EventEmitter {
  constructor(name, age) {
    super();
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
}

let anna = new Person("anna", "30");
let sam = new Person("sam", "35");
anna.on("age", () => {
  console.log("this is " + anna.name + " "+ anna.age);
  console.log(`Hi ${ anna.name }   ${anna.age} years old`);
});
sam.on("name", () => {
  console.log("this is " + sam.name);
});
anna.emit('name');
anna.emit('age');
sam.emit('name');

console.log("--------module-------")
console.log(module);
console.log("------exports------");
console.log(exports);
console.log("-------filename------");
console.log(__filename);

//
const os = require('os');
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log(`total memory: ${totalMemory}`);
console.log(`free memory: ${freeMemory}`);
console.log(process);