import { Dog } from "./dog.js";
import { Snake } from "./snake.js";
let animals = [new Dog("Pluto"), new Dog("Reksio"), new Snake("bob")];
animals.forEach(f);
function f(a) {
    a.getVoice();
}
