import { Dog } from "./classes/dog.js";
import { Snake } from "./classes/snake.js";
let animals = [new Dog("Pluto"), new Dog("Reksio"), new Snake("bob")];
animals.forEach(f);
function f(a) {
    a.getVoice();
}
