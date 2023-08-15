class Aleatorio {
    get(): number {
        return Math.floor(Math.random() * 100 + 1);
    }
}

for(let i = 0; i < 5; i++){
    console.log(new Aleatorio().get())
}