import { Animal } from "./abstract_animal.js";
export class Butterfly extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    getVoice() {
        console.log(`"Fru Fru"`);
    }
    eat() {
        console.log("butterfly eat");
    }
}
