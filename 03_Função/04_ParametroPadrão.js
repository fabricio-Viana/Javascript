// estrategia gerar padrão

function soma1(a,b,c){
    a = a || 0
    b = b || 0
    c = c || 0

    return a+b+c 
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0) )

//----- estrategia 2 3 4 

function soma2(a,b,c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? a : 1
    c = isNaN(c) ? 1 : c
    return a+b+c

}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0) )

// valor padão da atualização do ema

function soma3(a=1,b=1,c=1){
    return a+b+c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0) )