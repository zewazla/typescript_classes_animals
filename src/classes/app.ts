import { Animal } from "./abstract_animal.js";
import { Butterfly } from "./butterfly.js";
import { Dog } from "./dog.js";
import { Snake } from "./snake.js";

let animals: Animal[] = [new Dog("Pluto"), new Snake("Bob"), new Butterfly("Beauty")];


animals.forEach(f);


function f(a:Animal) {
    console.log("I am " + a.name);
    a.getVoice();
    a.eat();
}

