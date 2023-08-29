import { Carro2 } from "./exercicio4";

const carros: Carro2[] = []

carros.push(new Carro2("VW", "Gol"));
carros.push(new Carro2("Fiat", "Uno"));
carros.push(new Carro2("GM", "Corsa"));

carros.forEach((carro) => {
    console.log(carro.marca, carro.modelo);
})