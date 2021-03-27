import { Animal } from "./abstract_animal.js";
export class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    getVoice() {
        console.log("Hau, hau");
        super.getVoice();
    }
}
