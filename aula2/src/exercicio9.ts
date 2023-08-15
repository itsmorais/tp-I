class Numero {
    nros: number[] = [];

    public add(nro: number): void {
        this.nros.push(nro);
    }

    public sum(): number {
        let s = 0

        s = this.nros.reduce((somatorio, atual) => somatorio + atual)
        return s;
    }

    public max() {
        let maior = this.nros[0];

        this.nros.map((numero) => {
            if (numero > maior) {
                maior = numero;
            }
        })
        return maior;
    }
}

let numero = new Numero();
numero.add(8);
numero.add(2);
numero.add(9);
numero.add(4);
numero.add(5);

console.log(numero.sum());
console.log(numero.max())