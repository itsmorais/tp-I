class Operacao {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public somar(): number {
        return this.x + this.y;
    }

    public subtrair(): number {
        return this.x - this.y;
    }

    public dividir(): number {
        return this.x / this.y;
    }
}

const op = new Operacao(3, 5);
console.log("Soma", op.somar());
console.log("Subtrair", op.subtrair());
console.log("Dividir", op.dividir());