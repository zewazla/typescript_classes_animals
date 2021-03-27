import { Animal } from "./abstract_animal.js";

export class Dog extends Animal {
    constructor(public name: string){
        super(name);
    }

    getVoice() {
        console.log("Hau, hau");
        super.getVoice();
    }
}