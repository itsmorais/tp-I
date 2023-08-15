class Retangulo {
    base:number;
    altura:number;

    constructor(base:number, altura:number){
        this.base = base;
        this.altura = altura
    }

    area():number{
        return this.base * this.altura;
    }

    perimetro():number {
        return 2 * this.base + 2 * this.altura;
    }
}

let meuRetangulo = new Retangulo(10,7);

console.log(meuRetangulo.area());
console.log(meuRetangulo.perimetro());