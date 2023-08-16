class Carro {
    marca?: string;
    modelo?: string;
    ano?: number;


    constructor(marca?: string, modelo?: string, ano?: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }


    print(): void {
        console.log(this);
    }

}

const g = new Carro("VW", "GOL", 2010);
const f = new Carro("Fiat", "uno");
const v = new Carro();


g.print();
f.print();
v.print();