class Ponto {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;

    }

    public distancia(ponto: Ponto): number {
        return Math.sqrt((ponto.x - this.x) ** 2 + (ponto.y - this.y) ** 2)
    }
}

let a = new Ponto(3, 5);
let b = new Ponto(1, 2);

console.log(a.distancia(b));