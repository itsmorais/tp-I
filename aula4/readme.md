# Modificadores de visibilidade

## Modificador static
O modificador static é usado para definir membros (propriedades e métodos) estáticos em uma classe. Membros estáticos são associados à própria classe, em vez de instâncias individuais da classe. Isso significa que eles podem ser acessados diretamente na classe, sem a necessidade de criar uma instância da classe.

```ts
class Contador {
    static quantidade: number = 0;
    incrementar(): void {
        // certo: quantidade existe na classe
        Contador.quantidade++;
    }
}

// Não há necessidade de instanciar um objeto para acessar a propriedade quantidade
console.log(Contador.quantidade)

```

No diagrama de classes UML o modificador static é representado pelo sublinhado ou pelo estereótipo <<static>> à esquerda do nome do membro. 
![image](https://github.com/itsmorais/tp-I/assets/53665466/477448f0-a5ac-4bdb-8c9c-28ba72074168)

## Modificador readonly
No TS, o modificador readonly é usado para declarar propriedades de uma classe como somente leitura. Isso significa que o valor de uma propriedade readonly não pode ser alterado fora do construtor
```ts
class Pessoa {
    readonly nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    alterar(): void {
        // erro de compilação: a propriedade nome não pode ser alterada
        this.nome = "Aninha";
    }
}
```
Ela pode ser alterada somente no construtor.
- O modificador readonly também pode ser aplicado nos parâmetros do construtor para definir e inicializar as propriedades.
```ts
class Pessoa {
    idade: number;
    constructor(readonly nome: string, idade: number) {
        this.idade = idade;
    }
   
}

let pessoa = new Pessoa("Isabella",23);
console.log(pessoa)// Isabella 23
```
O diagrama de classes UML não possui uma representação específica para o modificador readonly. No entanto, é possível utilizar o estereótipo <<readonly>> à esquerda da propriedade para indicar somente leitura.
![image](https://github.com/itsmorais/tp-I/assets/53665466/9ddfed79-7267-4a40-b7f9-dc50a35ffdca)

## Modificadores de visibilidade
Os modificadores de visibilidade desempenham papel importante na POO ao controlar o acesso aos membros (propriedades e métodos) de uma classe. Eles ajudam a estabelecer o encapsulamento e a modularidade do código, fornecendo restrições sobre como os membros podem ser acessados e manipulados.
Os modificadores de visibilidade também são chamados de modificadores de acessibilidade, pois na prática eles restringem o acesso aos membros da classe
- No Typescript existem três modificadores de visibilidade
  - public: valor default,Os membros públicos podem ser acessados de qualquer lugar, tanto dentro da classe quanto
por meio de instâncias da classe e dentro de subclasses;
  - private: o modificador private restringe o acesso aos membros apenas dentro da própria classe onde eles são
definidos. Membros privados não podem ser acessados fora da classe ou por meio de instâncias da classe.
  - protected: O modificador protected permite que os membros sejam acessados na própria classe, bem como nas
subclasses que herdam da classe onde os membros são definidos. Os membros protegidos não podem ser acessados
fora da classe ou por meio de instâncias da classe

## Getters e Setters
Os getters e setters são recursos que permitem controlar o acesso e a atribuição de valores às propriedades de uma classe. Eles permitem definir comportamentos personalizados para a leitura (getter) e escrita (setter) de propriedades, em vez de simplesmente obter ou atribuir valores diretamente.
```ts
class Pessoa {
    private _nome: string;

    constructor(_nome: string) {
        this._nome = _nome;
    }

    get nome(): string {
        return this._nome;
    }
    set nome(_nome: string) {
        this._nome = _nome;
    }
}

const pessoa = new Pessoa("Isabella");
console.log(pessoa.nome); // Método get = Isabella

pessoa.nome = "Bella" // Método set
console.log(pessoa.nome); // Método get = Bella


```
Observação: os acessos get e set não podem ter o mesmo nome da propriedade.

## Propriedades de parâmetro:
No TS, as propriedades de parâmetro (parameter properties, em inglês) são uma sintaxe simplificada para definir e inicializar propriedades de uma classe diretamente nos parâmetros do construtor. Essa abordagem economiza tempo e reduz a repetição de código, tornando mais fácil declarar e atribuir valores às propriedades de uma classe em um único local.
```ts
class Pessoa {
    //as propriedades são definidas nos parâmetros do construtor
    constructor(public nome: string, private idade: number, readonly genero: string) {
        // as propriedades são inicializadas nos parâmetros
    }
    public print(): void {
        console.log(this.nome, this.idade, this.genero);
    }
}
const p = new Pessoa("Isabella", 23, "F");
p.print();

```
