import { Butterfly } from "./butterfly.js";
import { Dog } from "./dog.js";
import { Snake } from "./snake.js";
let animals = [new Dog("Pluto"), new Snake("Bob"), new Butterfly("Butterfly")];
animals.forEach(f);
function f(a) {
    console.log("I am " + a.name);
    a.getVoice();
    a.eat();
    if (a instanceof Butterfly || a instanceof Snake) {
        a.run();
    }
}
