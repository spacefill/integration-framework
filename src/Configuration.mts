import { $ } from "zx";

export class Configuration {
    public test:string;

    constructor(test: string) {
        this.test = test;
    }

    async echo() {
        await $`echo inside configuration`
    }
}