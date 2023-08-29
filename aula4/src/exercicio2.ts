class Operacao2 {
    constructor(private x: number, private y: number) {

    }

    somar(): number {
        return this.x + this.y;
    }
}

const op2 = new Operacao2(5, 15);
console.log("Somar:", op2.somar());