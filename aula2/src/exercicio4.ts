class Carro {
    marca: string = "";
    modelo: string = "";

    setMarca(marca: string): void {
        this.marca = marca;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    print(): void {
        console.log(`${this.marca} ${this.modelo}`);
    }
}

let gol = new Carro();
gol.setModelo("Gol");
gol.setMarca("Vw");

let uno = new Carro();
uno.setMarca("Fiat");
uno.setModelo("Uno");

gol.print();
uno.print();