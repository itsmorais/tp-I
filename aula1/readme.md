## Introdução a Typescript

#### Tipos de dados
- string: sequências de caracteres;
- number: números inteiros ou reais;
- boolean: somente os valores true e false;
- undefined: representa um valor indefinido (não definido);
- bigint: representa números inteiros maiores do que -(253 - 1) e menores do que (253 - 1).
- null: representa um valor nulo. Na prática é usado para referenciar a ausência de endereço de memória. 

```ts
let nome:string = "Ana";
let idade:number = 25; //número inteiro
let peso:number = 59.9; //número real
let doador:boolean = true; //booleano
let fone:null = null; //sem endereço de memória
let cel:undefined = undefined; //não definido
let distancia:bigint = 20n; //o literal n é usado para indicar que o número é bigint

```

### Declaração de variável -> TS possuí tipagem estática
A vantagem da tipagem estática é o erro de atribuição ser detectado em tempo de compilação, ou seja, não precisamos executar o código para detectar o erro.

Na linguagem TS podemos definir o tipo de dados de uma variável de várias maneiras. A seguir tem-se as duas mais comuns:

- Inferência de tipo
    - O TS pode inferir o tipo de uma variável com base no valor atribuído a ela

```ts
let nome = "Isabella"; // TS infere tipo string
let idade = 25; // TS infere tipo number
```

- Anotação de tipo explícita (type annotations)
    - o tipo é explicitamente anotado
```ts
let nome:string = "Isabella";
let idade:number = 25;
```

No TS todas as variáveis precisam ser declaradas com um tipo de dado, porém nem sempre sabemos os tipos de dados que a variável receberá durante a execução do código. Para contornar este problema, o TS possui o tipo especial *any*.

```ts
let elemento:any = 1;
console.log(typeof elemento); // imprime number

elemento = "oi";
console.log(typeof elemento); // imprime string

elemento = true;
console.log(typeof elemento); // imprime boolean
```

Existem duas maneiras de declarar um tipo array:
 - Anotação de tipo colchetes []
 ```ts
 let numeros:number[] = [1,2,3];
 let nomes:string[] = ["Pedro","João"];
 let outros:any[] = [2.5,"texto",true];

 ```
 - Tipos genéricos (generics) Array<T>, onde Array é um tipo de dado objeto para arrays e T é tipo de dado dos elementos do array
 ```ts
 let numeros:Array<number> = [1,2,3];
 let nomes:Array<string> = ["Pedro","Maria","Ana"];
 let outros:Array<any> = [2.5,"Michael",false];
 ```

 #### União de tipos no typescript
 Permite que uma variável possa aceitar diferentes tipos de valores.
 A sintaxe para criar uma união de tipos é usando o operador de pipe (|) entre os tipos a serem unidos.

 ```ts
 let valor:number|string = 12;
 console.log(typeof valor); // number

 valor = "oi"; //string

 valor = false // error
 ```

 A união de tipos pode ser usada em arrays
- No exemplo a seguir os elementos dos arrays podem ser number ou string:
 ```ts
let valores:(number|string)[] = [1,"oi",3];
let numeros:(number|string)[] = ["5","Michael","olá"];
let nomes:(number|string)[] = ["Ana","Bruna","Michael"]

let outros:Array<number|string> = [1,"oi",3];
let outrosNumeros:Array<number|string> = [1,2,5];
let outrosNomes:Array<number|string> = ["Ana","Bruna","Michael"]
 ```

 - Já no exemplo a seguir os elementos dos arrays podem receber arrays de tipo number OU array de string

 ```ts
 let teste:number[]|string[];
teste = [1,2,3];
teste = ["a","b","c"];
teste = [1,"a",2]; // ERROR

let outroTeste:Array<number>|Array<string>;
outroTeste = [1,2,3];
outroTeste = ["a","b","c"];
outroTeste = [1,"a",2]; //ERROR
 ```

 #### Função no typescript
 No TS podemos fazer a anotação de tipo(tipagem) de dado dos parâmetros e do retorno da função

 ```ts
 // a função foi anotada com retorno void pelo fato de a função não ter return no seu corpo
function somar(a:number,b:number):void{
    const resultado = a + b;
    console.log("Resultado:",resultado);
}

function subtracao(a:number,b:number):number{
    return a - b;
}

somar(10,5); // Resultado: 15
console.log(subtracao(9,3)); // 6
 ```

- Parâmetro condicional:
O tipo condicional é definido colocando ? após a declaração da variável. Desta forma, a variável terá valor undefined se ela não receber valor como parâmetro

```ts
function soma(a:number,b?:number):number{
if(b){ // se B não for undefined
    return a + b
}else{
    return a
}
}

console.log(soma(4,5)); // 9
console.log(soma(4)); // 4
```

- Declarar função
    - Função nomeada
    ```ts
    function dif(a:number,b:number):number{
    return a - b;
    }
    ```
    - Função anônima
    ```ts
    const somar = function(a:number,b:number):number{
    return a + b;
    }
    ```
    - Arrow function
    ```ts
    const mult = (a: number, b: number):number => {
    return a * b;
    };
    
    const div = (a: number, b: number):number => a / b;
    const pow = (a: number, b: number):number => { return a ** b };
    ```

