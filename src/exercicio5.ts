const operacao5 = (v1: Array<number>, v2: Array<string>): Array<string> => {
    let res: Array<string> = [];
    for (let i = 0; i < v1.length; i++) {
        res[i] = v1[i] + v2[i];
    }
    return res;
}
const vet5 = [5, 3, 1, 8, 2];
const vet6 = ["M", "a", "r", "i", "a"];
console.log("Resultado:", operacao5(vet5, vet6));