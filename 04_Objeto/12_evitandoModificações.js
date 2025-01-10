// Object.preventExtensions não deixa adicionar mais atributos

const produto = Object.preventExtensions({
    nome:'caneta', preco: 1.99, tag: 'promoção'
})

console.log('extensivel' ,Object.isExtensible(produto))
produto.desconto = 0.50;
delete produto.tag;
produto.nome = 'FABER CASTLE LAPIS'

console.log(produto)

// Object.seal sela de entradas e de deletes

const pessoa ={nome:'juliana', idade: 35}
Object.seal(pessoa)
console.log('selado', Object.isSealed(pessoa))

pessoa.qualidade = 'simpatica'
delete pessoa.idade
pessoa.idade = 38

console.log(pessoa)

Object.freeze(pessoa)

pessoa.idade =10
console.log(pessoa)