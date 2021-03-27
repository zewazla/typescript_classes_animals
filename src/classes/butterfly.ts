import { Animal } from "./abstract_animal.js";

export class Butterfly extends Animal {
  
    constructor(public name: string){
        super(name);
    }

    getVoice() {
        console.log(`"Fru Fru"`);
    }

    eat() {
        console.log("butterfly eat");
    }

    run() {
        console.log("I fly!");
    }
}