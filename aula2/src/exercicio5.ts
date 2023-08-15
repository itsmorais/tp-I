class Questao {
    public enunciado: string;
    private valor: number;

    constructor(enunciado: string, valor: number) {
        this.enunciado = enunciado;
        this.valor = valor;
    }

    print(): void {
        console.log(`${this.enunciado} (${this.valor} pts)`)
    }
}


let questao = new Questao("O que é um array?", 0.5);
questao.print();