export class Animal {
    constructor(name) {
        this.name = name;
    }
    getVoice() {
        console.log(`My name is ${this.name}`);
    }
}
