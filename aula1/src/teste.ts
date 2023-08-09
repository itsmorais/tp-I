
function soma(a:number,b?:number):number{
    if(b){ // se B não for undefined
        return a + b
    }else{
        return a
    }
}

console.log(soma(4,5)); // 9
console.log(soma(4)); // 4