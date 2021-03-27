import { Animal } from "./abstract_animal.js";

export class Snake extends Animal {
    constructor(public name: string){
        super(name);
    }

    getVoice() {
        console.log("sss");
        super.getVoice();
    }
}