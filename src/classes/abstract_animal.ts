export abstract class Animal {
    constructor(public name: string) { }

    getVoice() {
        console.log(`My name is ${this.name}`);
    }
}