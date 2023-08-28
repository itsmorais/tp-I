class Texto extends String {
    primeira(): string {
        return this.charAt(0);
    }

    ultima(): string {
        return this.charAt(this.length - 1);
    }

    tamanho(): number {
        return this.length;
    }

    minusculo(): string {
        return this.toLowerCase();
    }
}

const texto = new Texto("Boa noite");

console.log("Quantidade: ",texto.tamanho())

console.log("Primeira: ", texto.primeira())

console.log("Última: ",texto.ultima())

console.log("Minúscula: ",texto.minusculo())