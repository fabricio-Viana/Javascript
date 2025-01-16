require('./07_global')

console.log(MinhaApp.saudacao())

console.log(MinhaApp.nome)

console.log('----------------')
MinhaApp.nome = 'Ai caramba!!' // pode ser alterado porem se utilizar object.freeze ajuda

console.log(MinhaApp.nome)




