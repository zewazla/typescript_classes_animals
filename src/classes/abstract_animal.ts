export abstract class Animal {
    constructor(public name: string) { }

    abstract getVoice(): void;

    abstract eat(): void;
    }
