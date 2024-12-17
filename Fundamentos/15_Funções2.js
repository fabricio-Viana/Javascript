let n1 = function (a , b){ // função sem nome
    console.log((a || 0) + (b || 0))
}

n1(2,10);
n1();

// armazenamento de uma função arrow em uma variavel

const soma = (a,b) => {
    return (a || 0) + (b ||0);
}

console.log(soma(10))

// retorno implicito

const sub = (a , b) => (a||0) - (b || 0)

console.log(sub())
console.log(sub(10,5))