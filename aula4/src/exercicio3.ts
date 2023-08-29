class Carro {
    private _marca: string = '';
    private _modelo: string = '';

    set marca(marca: string) {
        this._marca = marca;
    }
    get marca(): string {
        return this._marca;
    }

    set modelo(modelo: string) {
        this._modelo = modelo;
    }
    get modelo(): string {
        return this._modelo;
    }
}

const carro = new Carro()
carro.marca = "VW";
carro.modelo = "Gol";

console.log(carro);
