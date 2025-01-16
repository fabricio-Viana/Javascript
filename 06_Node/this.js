console.log(this == global)
console.log(this == module )
console.log(this == module.exports) // fora de uma função ele aponta para module.exports
console.log(this == exports)

this.nome ="MELISSA" // esta colocando dentro de module.exposts

function logthis(){
    console.log('Dentro de uma função')
    console.log(this == exports)
    console.log(this == global)

    this.nome ='FABRICIO' // ISTO DENTRO DE UMA FUNÇÃO ESTA SENDO COLOCADO EM GLOBAL
}
logthis()

console.log(global.nome)
console.log(module.exports.nome)

console.log(this.nome)