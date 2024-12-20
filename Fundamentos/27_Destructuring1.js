const pessoa = {
    nome: 'ANA',
    idade: 11,
    endereço: {
        longradoura: "rua minas gerais",
        casa: 2
    }
}

console.log(pessoa)

const {nome, idade} = pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log(n , i)

const {sobrenome , humor = "alegre"} = pessoa

console.log(sobrenome,humor)

const {endereço: {longradoura , casa} } = pessoa
console.log(longradoura,casa)
