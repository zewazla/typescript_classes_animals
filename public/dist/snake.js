import { Animal } from "./abstract_animal.js";
export class Snake extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    getVoice() {
        console.log("sss");
        super.getVoice();
    }
}