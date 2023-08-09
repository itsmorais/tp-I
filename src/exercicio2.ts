function converter(vet:number[]):string[] {
    const res:string[] = [];
    for (let i = 0; i < vet.length; i++) {
        res[i] = "" + vet[i];
    }
    return res;
}
const vetor = [5, 3, 1, 8, 2];


function converter2(vet:number[]):string[]{
    let res:string[] = [];
    res = [...vet.map((elem) => ""+elem)]
    return res
}

console.log("Resultado:", converter2(vetor));