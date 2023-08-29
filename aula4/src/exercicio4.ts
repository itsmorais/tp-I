export class Carro2 {
    static contador: number = 0;
    constructor(private _marca: string, private _modelo: string) {
        Carro2.contador++;
    }

    get marca(): string {
        return this._marca;
    }

    get modelo(): string {
        return this._modelo;
    }

    get contador(): number {
        return Carro2.contador;
    }
}

//const carro2 = new Carro2("vw", "GOl");