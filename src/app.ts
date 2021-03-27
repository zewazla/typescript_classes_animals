import { Animal } from "./classes/abstract_animal.js";
import { Dog } from "./classes/dog.js";
import { Snake } from "./classes/snake.js";

let animals: Animal[] = [new Dog("Pluto"),new Dog("Reksio"), new Snake("bob")];


animals.forEach(f)


function f(a:Animal){
    a.getVoice();
}
