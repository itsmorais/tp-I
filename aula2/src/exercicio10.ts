class Circulo {
    public raio: number;
    private pi: number = Math.PI

    constructor(raio: number) {
        this.raio = raio;
    }

    public area(): number {
        return ((this.pi) * (Math.pow(this.raio, 2)));
    }

    public perimetro(): number {
        return (2 * this.pi * this.raio);
    }
}

const circulo = new Circulo(5);

console.log("Area",circulo.area());
console.log("Perimetro",circulo.perimetro());