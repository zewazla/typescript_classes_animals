import { Animal } from "./abstract_animal.js";

export class Butterfly extends Animal {
  
    constructor(public name: string){
        super(name);
    }

    getVoice() {
        console.log(`"Fru Fru"`);
    }

    eat(): void {
        console.log("butterfly eat");
    }
}