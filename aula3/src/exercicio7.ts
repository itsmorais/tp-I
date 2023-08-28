class Veiculo {
    public valor: number

    constructor(valor: number) {
        this.valor = valor;
    }
}

class Automovel extends Veiculo {
    fabricante: string

    constructor(valor: number, fabricante: string) {
        super(valor);
        this.fabricante = fabricante;
    }
    print(): void {
        console.log(`${this.fabricante} - ${this.valor}`)
    }

}

class Cavalo extends Veiculo {
    public raca: string

    constructor(valor: number, raca: string) {
        super(valor);
        this.raca = raca;
    }

    print(): void {
        console.log(`${this.raca} - ${this.valor}`)
    }
}

const auto = new Automovel(12500,"GM");
const cavalo = new Cavalo(4500,"Mangalarga");

auto.print()
cavalo.print()