const prod1 = {
    nome: 'tv',
    preco: 4.000,
}

const prod2 = {
    nome: 'pc',
    preco: 5.000,
}

// function factory

function criarPessoa(nome, idade){
    return {
        nome: nome || 'Melissa' ,
        idade: idade || 20,

        
    }
}

console.log(criarPessoa())
console.log(criarPessoa('FARRICIO',23))


