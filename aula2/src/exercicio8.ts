class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public distance(ponto: Point): number {
        return Math.sqrt((ponto.x - this.x) ** 2 + (ponto.y - this.y) ** 2)

    }
}


class Retangle {
    public inferiorEsquerdo: Point;
    public superiorDireito: Point;

    constructor(ie: Point, sd: Point) {
        this.inferiorEsquerdo = ie;
        this.superiorDireito = sd;
    }

    public area(): number {
        return this.inferiorEsquerdo.y * this.superiorDireito.x;
    }
}

const sd = new Point(3,5);
const ie = new Point(1,2);

const r = new Retangle(ie,sd);
console.log("Area",r.area());