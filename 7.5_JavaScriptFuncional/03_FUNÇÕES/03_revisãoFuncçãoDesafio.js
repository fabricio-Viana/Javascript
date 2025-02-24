function somar(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

const soma = somar(1)(2)(3)
console.log(soma)

function somarr(a,b){
    return a+b
}

function subtrair(a,b){
    return a-b
}

function mult(a,b){
    return a*b
}


const calcular = (a)=>{
    return (b)=>{
        return function(fn){
            return fn(a,b)
        }
    }
}

const calculadoraQueSoma = calcular(5)(5)(somarr)

console.log(calculadoraQueSoma)

const calculadoraQueSubtrai = calcular(5)(5)(subtrair)

console.log(calculadoraQueSubtrai)

const calculadoraQueMultiplica = calcular(5)(5)(mult)

console.log(calculadoraQueMultiplica)