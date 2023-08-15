
class Filme {
    public titulo: string;
    public duracao: number;

    constructor(titulo: string, duracao: number) {
        this.titulo = titulo;
        this.duracao = duracao;
    }

    print(): void {
        console.log(`O filme ${this.titulo} possui ${this.duracao} min`)
    }
}

let matrix = new Filme("Matrix", 136);
let futuro = new Filme("De volta para o futuro", 116);

matrix.print();
futuro.print();