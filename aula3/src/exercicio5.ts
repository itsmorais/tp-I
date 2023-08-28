class Matematica {
    public numero: number;

    constructor(numero: number) {
        this.numero = numero;
    }

    calcular(): void {

    }
}

class Multiplicar extends Matematica {
    constructor(numero: number) {
        super(numero)
    }

    calcular(): void {
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.numero} X ${i} = ${this.numero * i}`);
        }
    }
}

class Somar extends Matematica {
    constructor(numero: number) {
        super(numero)
    }
    calcular(): void {
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.numero} + ${i} = ${this.numero + i}`);
        }
    }
}
class Subtrair extends Matematica {
    constructor(numero: number) {
        super(numero)
    }
    calcular(): void {
        for (let i = this.numero; i >= 0; i--) {
            console.log(`${this.numero} - ${i} = ${this.numero - i}`);
        }
    }
}

const multiplica: Matematica = new Multiplicar(5);
const soma: Matematica = new Somar(5);
const subtrai:Matematica = new Subtrair(8);

multiplica.calcular();
soma.calcular();
subtrai.calcular()