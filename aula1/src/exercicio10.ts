const sum = (a:number, b:number):number => a + b;
const dif = (a:number, b:number):number => a - b;

//uma função pode receber outra função como parâmetro
const operacao10 = (f:Function, a:number, b:number) => f(a, b);
console.log("5 + 3:", operacao10(sum, 5, 3));
console.log("5 - 3:", operacao10(dif, 5, 3));
