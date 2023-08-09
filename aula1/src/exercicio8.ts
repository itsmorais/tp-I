// gera um número inteiro aleatório no intervalo [0,99]
const aleatorio = (): number => Math.floor(Math.random() * 100);

// gera um array de números aleatórios
const aleatorios = (quantidade: number): number[] => {
    const res: number[] = [];
    for (let i = 0; i < quantidade; i++) {
        // obtém um número aleatório e coloca no final do array
        res.push(aleatorio());
    }
    return res;
}
console.log("5 números aleatórios:", aleatorios(5)); //5 números aleatórios: [ 55, 50, 53, 72, 27 ]
console.log("3 números aleatórios:", aleatorios(3)); // 3 números aleatórios: [ 84, 8, 89 ]