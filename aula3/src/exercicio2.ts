class X {
    public um(): void {
        console.log("Um");
    }
}

class Y extends X {
    public dois(): void {
        this.um();
        console.log("Dois");
    }
}


class Z extends Y {
    public tres(): void {
        this.dois();
        console.log("Três");
    }
}


const z = new Z();
z.tres();