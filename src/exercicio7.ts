const parImpar:Function = (nro:number):boolean => nro % 2 == 0 ? true:false;

const somarArray:Function = (v:Array<number>):void => {
    for(let i= 0 ; i < v.length ; i++){
        console.log(v[i], "é", parImpar(v[i]));
    }
}

const v:Array<number> = [5,3,1,8,2];

somarArray(v);

/* 
Saída
5 é false
3 é false
1 é false
8 é true
2 é true */