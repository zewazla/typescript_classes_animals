import { Butterfly } from "./butterfly.js";
import { Dog } from "./dog.js";
import { Snake } from "./snake.js";
let animals = [new Dog("Pluto"), new Snake("Bob"), new Butterfly("Beauty")];
animals.forEach(f);
function f(a) {
    console.log("I am " + a.name);
    a.getVoice();
    a.eat();
}
