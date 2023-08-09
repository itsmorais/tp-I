Criar o package.json

```
npm init -y
```

instalar os pacotes typescript e o ts-node como dependencia de desenvolvimento
```
npm i -D ts-node typescript
```

Utilize o comando tsc --init para criar o
arquivo tsconfig.json na raiz do projeto.
```
tsc --init
```
criar uma pasta chamada src na raiz do projeto

adicione a propriedade scripts no package.json e criar os comandos para executar cada exericico

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "um": "npx ts-node ./src/exercicio1",
    "dois": "npx ts-node ./src/exercicio2",
    "tres": "npx ts-node ./src/exercicio3"}
```


